const express = require('express');
// const { append } = require('express/lib/response');
const app = express()
const path = require('path');
const fs = require('fs');
// const user = require('./public/new.js');

const sqlite3 = require('sqlite3')
var db = new sqlite3.Database(__dirname + '/public/db/iot2.db');

app.use(express.static(path.join(__dirname, 'node_modules')));
app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, () => {
    console.log("serv rodadando")
    
    db.serialize(function() {
        console.log("entrou no serialize")

        // selectUsers()
        selectProperties()
    });
    
})


function selectProperties(){
        db.each("select ('[' || group_concat(json_object('id', id, 'name', name, 'type', type)) || ']') as 'row' from (select * from property where id_user = 1)", function(err, row) {
            if (err) return console.log(err.message)    
            fs.writeFile('./public/properties.json', String(row.row), err => {
                if (err) {
                  console.error(err)
                  return
                }
                console.log("escreveu")
            })
        })
}


app.get('/', function(req, res){
    res.sendFile(path.join(__dirname + '/public/index.html'));
    res.send()
})

export {sqlite3}