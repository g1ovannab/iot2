const express = require('express');
// const { append } = require('express/lib/response');
const app = express()
const path = require('path');

const jsdom = require('jsdom');
$ = require('jquery')(new jsdom.JSDOM().window);

const bodyParser = require('body-parser');

app.set("view engine", "ejs")
app.set('views', path.join(__dirname, 'views'));

app.use('./views', express.static(path.join(__dirname, './views')))    
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, 'node_modules')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views')));


let properties = []

const sqlite3 = require('sqlite3');
var db = new sqlite3.Database(__dirname + '/public/db/iot2.db');

app.listen(3000, () => {
    console.log("serv rodadando")
    
    db.serialize(function() {
        selectProperties()
    });
})

app.get("/", function(req, res){
    res.render(path.join(__dirname + '/views/main'), {
        properties: properties
    })
})

app.post('/', function(req, res) {
    console.log(req.body.property)
    // console.log(req.query)
    res.render(path.join(__dirname + '/views/graph'), {
        properties: properties
    })
    res.status(200).end()
    // console.log("oiSsssamdnsdkjdnasnd") 
})

// console.log("property: " + property);
// var initDate = req.body.initDate;
// console.log("initDate: " + initDate);
// var finalDate = req.body.fromDate;
// var property = req.body.property;
// console.log("finalDate: " + finalDate);
// var grouping = req.body.typeOfGroup;
// console.log("grouping: " + grouping);

// res.end(); // end the response


// app.get("/graph", function(req, res){
//     var property = req.body.property;
//     // console.log("property: " + property);
//     var initDate = req.body.initDate;
//     // console.log("initDate: " + initDate);
//     var finalDate = req.body.fromDate;
//     // console.log("finalDate: " + finalDate);
//     var grouping = req.body.typeOfGroup;
//     // console.log("grouping: " + grouping);

//     res.send(property + ",")
    
// })

function selectProperties(){
    db.each("select property.id as 'id', property.name as 'name', property.type as 'type' from property where id_user = 1", function(err, row) {
        if (err) return console.log(err.message)    

        let data = {id: row.id, name: row.name, type: row.type}
        properties.push(data)
    })
}
