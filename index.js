const express = require('express');
// const { append } = require('express/lib/response');
const app = express()
const path = require('path');


var jsdom = require('jsdom');
$ = require('jquery')(new jsdom.JSDOM().window);

app.set("view engine", "ejs")
app.set('views', path.join(__dirname, '/views'))

let selectedProperty = ""
let initDate = ""
let finalDate = ""
let selectedTypeOfGrouping = ""

let properties = []

const sqlite3 = require('sqlite3')
var db = new sqlite3.Database(__dirname + '/public/db/iot2.db');

app.use(express.static(path.join(__dirname, 'node_modules')));
app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, () => {
    console.log("serv rodadando")
    
    db.serialize(function() {
        console.log("entrou no serialize")
        selectProperties()
    });

    $(function (){
       console.log("oi")
    })


    $('#property').on('change', function(){
        selectedProperty = this.value
        console.log(selectedProperty)
    })

    $('#typeOfGroup').on('change', function(){
        selectedTypeOfGrouping = this.value 
        console.log(selectedTypeOfGrouping)
    })

    $('#fromDate').on('change', function(){
        initDate = this.value
        console.log('fromDate changed to ' + initDate)
        $('#toDate').min = initDate
    })


    $('#toDate').on('change', function(){
        finalDate = this.value
        console.log('toDate changed to ' + finalDate)
        // var fromDate = document.getElementById("fromDate");
        $('#fromDate').max = finalDate
    })

    $('#showGraph').on('click', function() {
        if (selectedProperty == "" || (initDate == "" && finalDate == "") || selectedTypeOfGrouping == "") {
            alert('cannot show the graph without selecting the property')
        } 
        
        console.log('will show the graph') 
    });

})

function selectProperties(){
    db.each("select property.id as 'id', property.name as 'name', property.type as 'type' from property where id_user = 1", function(err, row) {
        if (err) return console.log(err.message)    

        let data = {id: row.id, name: row.name, type: row.type}
        console.log(data)
        properties.push(data)
    })
}

//view n tá carregando

app.get('/', function(req, res){

    res.render(path.resolve(__dirname + '/views/graph', { 
        properties: properties
    }))
    // res.sendFile(path.join(__dirname + '/public/index.html'));
    // res.send()
})

app.post('/', function(req, res) {
    res.redirect("/")
})
