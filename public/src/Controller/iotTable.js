const { openDb } = require('../configDB.js');
const fetch = require('node-fetch');

async function createTable() {
    openDb().then(db => {
        db.exec('CREATE TABLE IF NOT EXISTS IOT (id INTEGER PRIMARY KEY, tempo DATE, gasto INTEGER)');//dateday DATE, timestamp DATE,id_property INTEGER, consumo INTEGER
        db.exec('CREATE TABLE IF NOT EXISTS Consumo (dateday DATE , timestamp DATE PRIMARY KEY,id_property INTEGER, gasto_real FLOAT(2))');
    });
}

const timestamp = /(?<date>[\d\-]*)T(?<stamp>[\d\:]*).(?<trash>[\d]*)Z/


async function insertTable() {
    var db;
    var consumo;
    var tempo;
    var date;
    var today = new Date();
    var endTime = new Date();
    var startTime = new Date();

    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var time = (today.getHours()) + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date + ' ' + time;
    endTime = dateTime;

    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var time = (today.getHours() - 1) + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date + ' ' + time;
    startTime = dateTime;

    // console.log(startTime)
    // console.log(endTime)


    var key = "6615871e-6222-4e2e-9325-f02e611ff39f";
    var url = "https://api.tago.io/data?variable=valor1&start_date=" + startTime.toString() + "&end_date=" + endTime.toString();


    function inserT(tempo, consumo, dateday) {
        openDb().then(db => {
            db.run('INSERT INTO IOT (tempo, gasto) VALUES (?,?)', tempo, consumo)
            db.run('INSERT INTO Consumo (dateday, timestamp,id_property,gasto_real) VALUES (?,?,?,?)', dateday, tempo,1,consumo)
           // dateday DATE, timestamp DATE,id_property INTEGER, consumo INTEGER

        });
    }

    fetch('url', {
        method: 'GET',

        headers: {
            'Authorization': '6615871e-6222-4e2e-9325-f02e611ff39f'
        }
    }).then(res => res.json())
        .then(json => {
            db = json
            for (var i = 0; i < db["result"].length; i++) {
                tempo = db["result"][i].time

                var match = tempo.match(timestamp)
                let singleDate = match.groups.date
                let singleStamp = match.groups.stamp

                tempo = singleDate + ' ' + singleStamp  // 2022-06-05 22:30:00

                date = singleDate // 2022-06-05

                console.log(singleDate)

                console.log(tempo)
                

                consumo = db["result"][i].value
                    inserT(tempo,consumo,date)
            }

        })
        .catch(err => console.log(err));
}


module.exports = { insertTable, createTable }
