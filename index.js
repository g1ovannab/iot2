const express = require('express');
const app = express()
const path = require('path');
const bodyParser = require('body-parser');
const cron = require('node-cron');

const {insertTable} = require('./public/src/Controller/iotTable')

app.set("view engine", "ejs")
app.set('views', path.join(__dirname, 'views'));

app.use('./views', express.static(path.join(__dirname, './views')))    
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, 'node_modules')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views')));


cron.schedule('* * * * * *', () => {
    console.log("antes de inserir")
    insertTable();
    console.log("depois de inserir")
});

let properties = []
let graph = []
let grouping = ""

const sqlite3 = require('sqlite3');
const { getEnvironmentData } = require('worker_threads');
var db = new sqlite3.Database(__dirname + '/public/db/database.db');

app.listen(3000, () => {
    console.log('Server rodando em: http://localhost:3000')
    
    db.serialize(function() {
        selectProperties()
    });
})

app.get("/", function(req, res){

    res.render(path.join(__dirname + '/views/main'), {
        graph: JSON.stringify(graph),
        grouping: grouping,
        properties: properties
    })
})

app.post('/', function(req, res) {
    let newGraph = []
    db.serialize(function() {
        newGraph = getDataForGraph(req.body.property, req.body.fromDate, req.body.toDate, req.body.typeOfGroup)
    });

    graph = newGraph
    grouping = req.body.typeOfGroup
    res.redirect('/')
})

function selectProperties(){
    db.each("select property.id as 'id', property.name as 'name' from property", function(err, row) {
        if (err) return console.log(err.message)    

        let data = {id: row.id, name: row.name}
        properties.push(data)
    })
}

function getDataForGraph(property, initDate, finalDate, grouping){
    let sameDay = (initDate == finalDate)
    let newGraph = []

    let query = "select "
    
    if (grouping == '1'){
        query += "c.timestamp as 'ts', c.gasto as 'gasto' "
    } else if (grouping == '2') { 
        query += "c.dateday as 'ts', sum(c.gasto) as 'gasto' "
    }

    query += "from consumption as c where id_property = " + property + " and c.dateday "

    if (sameDay) { query += " = '" + initDate + "' "}
    else { query += " >= '" + initDate + "' and c.dateday <= '" + finalDate + "'"}

    if (grouping == '2') { query += " group by c.dateday" }

    query += "order by c.dateday, c.timestamp"



    db.each(query, function(err, row) {
        if (err) {
            console.log(err.message)
            return newGraph
        }  

        let data = {timestamp: row.ts, gasto: row.gasto}
        newGraph.push(data)
    })

    return newGraph
}
