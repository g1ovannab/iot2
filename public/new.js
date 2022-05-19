import { app } from '../index.js';

// // import { properties } from './script.js'
// var a = properties

//     // $("#property").on("click", function(){

//     // })

// import sqlite3 from "./node_modules/sqlite3"

// window.require = require;

// const sqlite3 = require('sqlite3');
// var db = new sqlite3.Database(__dirname + "/db/iot2.db");

document.getElementById('property').onclick = function() {
  alert(app.properties)
  // console.log(properties);
}
// db.serialize(function () {
//   let properties = [];

//   db.each("select * from property where id_user = 1", function (err, row) {
//     if (err) return console.log(err.message);
//     let property = {
//       linhas: [row.id, row.name, row.type],
//     };

//     properties.push(property);
//     console.log(property);
//   });
//   // res.json({data:properties})
// });

// var option = document.createElement("option");
// option.text = property[1];
// option.value = property[0];
// console.log(option)

// var select = document.getElementById("property");
// console.log(select)
// select.appendChild(option);
// console.log(select)

// module.exports = {}
