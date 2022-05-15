const express = require('express');
const { append } = require('express/lib/response');
const app = express()
const path = require('path');

// const sqlite3 = require("sqlite3").verbose()
// var db = new sqlite3.Database(__dirname + '/db/iot2.db');

app.use(express.static(path.join(__dirname, 'node_modules')));
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', async function(req, res){
    res.sendFile(path.join(__dirname + '/public/index.html'));
    res.send()
})


app.listen(3000, () => {console.log("serv rodadando")})
//     console.log('bla')
    
//     db.serialize(function() {

//         let properties = []

//         db.each("select * from property where id_user = 1", function(err, row) {
//             if (err) return console.log(err.message)    
//             let property = {
//                 linhas: [row.id, row.name, row.type]
//             }

//             properties.push(property)
//             console.log(property)


//         })
//         // res.json({data:properties})
//     });
    

    
    
//     // db.close();
// });





// router.get('/sobre', function(req, res){
//     res.sendFile(path.join(__dirname + '/sobre.html'));
    
// });