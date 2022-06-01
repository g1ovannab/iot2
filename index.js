const express = require('express');
// const { append } = require('express/lib/response');
const app = express()
const path = require('path');
// const user = require('./public/new.js');

const sqlite3 = require('sqlite3')
// var db = new sqlite3.Database(__dirname + '/public/db/iot2.db');

app.use(express.static(path.join(__dirname, 'node_modules')));
app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, () => {
    console.log("serv rodadando")  
})

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname + '/public/index.html'));
    res.send()
})
