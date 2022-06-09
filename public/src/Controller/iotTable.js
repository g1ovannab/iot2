const {openDb} =  require('../configDB.js');
const fetch = require('node-fetch');

async function createTable(){
    openDb().then(db=>{
        db.exec(
            'CREATE TABLE IF NOT EXISTS IOT (id INTEGER PRIMARY KEY, tempo DATE, gasto INTEGER)'
            );
    });
}

  async function insertTable(){
    var db;
var consumo;
var tempo;
var today = new Date();
        var endTime = new Date();
        var startTime = new Date();

        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = (today.getHours()) + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date + ' ' + time;
        endTime = dateTime;

        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = (today.getHours() -1) + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date + ' ' + time;
        startTime = dateTime;





        console.log(startTime)
        console.log(endTime)

    
        var key = "6615871e-6222-4e2e-9325-f02e611ff39f";
        var url = "https://api.tago.io/data?variable=valor1&start_date=" + startTime.toString() + "&end_date=" + endTime.toString();


function inserT(tempo, consumo){
    openDb().then(db=>{
        db.run('INSERT INTO IOT (tempo, gasto) VALUES (?,?)', tempo, consumo);
    });
}

fetch(url, {
     method: 'GET',
        
    headers: { 
         'Authorization': '6615871e-6222-4e2e-9325-f02e611ff39f'
    }
 }).then(res => res.json())
   .then(json => {
        db = json
        for(var i = 0; i < db["result"].length; i++){
            tempo = db["result"][i].time
            consumo = db["result"][i].value
            inserT(tempo,consumo)
        }
        
    })
   .catch(err => console.log(err));


}


module.exports = {insertTable,createTable}
