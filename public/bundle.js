(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
// import * as properties from './properties.json' assert {type:'json'}
// import users from './users.json' assert {type:'json'}
// import sqlite3 from './db/sqlite3.def';
const sqlite3 = require('sqlite3');
var db = new sqlite3.Database(__dirname + '/public/db/iot2.db');

let selectedProperty = ""
let initDate = ""
let finalDate = ""
let selectedTypeOfGrouping = ""

window.onload = function() {
  loadProperties()
}

document.getElementById('property').addEventListener('change', function(){
  selectedProperty = this.value
  console.log(selectedProperty)
})



document.getElementById('typeOfGroup').addEventListener('change', function(){
  selectedTypeOfGrouping = this.value
  console.log(selectedTypeOfGrouping)
});

document.getElementById('fromDate').addEventListener('change', function(){
  initDate = this.value
  console.log('fromDate changed to ' + initDate)
  // var toDate = document.getElementById("toDate");
  document.getElementById("toDate").min = initDate
})


document.getElementById('toDate').addEventListener('change', function(){
  finalDate = this.value
  console.log('toDate changed to ' + finalDate)
  // var fromDate = document.getElementById("fromDate");
  document.getElementById("fromDate").max = finalDate
})

document.getElementById('showGraph').addEventListener('click', function() {
  // if (selectedProperty == "" || (initDate == "" && finalDate == "") || selectedTypeOfGrouping == "") {
  //   alert('cannot show the graph without selecting the property')
  // } 
  
  console.log('will show the graph') 
  //mandar aqui as informações pro sqlite de alguma forma fazer isso funcionar 
  alert("oi")



  db.serialize(function() {
    db.each("select ('[' || group_concat(json_object('id', id, 'name', name, 'type', type)) || ']') as 'row' from (select * from property where id_user = 1)", function(err, row) {
      if (err) return console.log(err.message)    
      
      console.log("sqlite do new.js")
    })
  });


});

function loadProperties(){

  db.each("select ('[' || group_concat(json_object('id', id, 'name', name, 'type', type)) || ']') as 'row' from (select * from property where id_user = 1)", function(err, row) {
    if (err) return console.log(err.message)    
    
    var option = document.createElement("option");
    option.text = row.row[i].name;
    option.value = row.row[i].id;
    console.log(option.text)
    
    var select = document.getElementById("property");
    select.appendChild(option);
  
  })

  // for (let i = 0; i < properties.length; i++) {
  // }
}


},{}]},{},[1]);
