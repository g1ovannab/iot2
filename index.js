const express = require('express');
// const { append } = require('express/lib/response');
const app = express()
const path = require('path');
const fs = require('fs');

const sqlite3 = require('sqlite3')
var db = new sqlite3.Database(__dirname + '/public/db/iot2.db');




app.listen(3000, () => {
    console.log("serv rodadando")
    
    var content = "--properties {"
    console.log(content)

    db.serialize(function() {
        console.log("entrou no serialize")
        
        let properties = []

        
        db.each("select * from property where id_user = 1", function(err, row) {
            if (err) return console.log(err.message)    
            let property = [row.id, row.name, row.type]
         

            content = content.concat("[" + row.id + ", '" + row.name + "', '" + row.type + "'], ")
            console.log(content)

            properties.push(property)
        
            var write = content
            fs.writeFile('./test.txt', write, err => {
                if (err) {
                  console.error(err)
                  return
                }
                console.log("escreveu")
                //file written successfully
            })
            // console.log(property)
        })
        	
        content.concat("}")
        console.log("")
        // aqui eu enviaria o valor de properties

        var write = content
        fs.writeFile('./test.txt', write, err => {
            if (err) {
              console.error(err)
              return
            }
            console.log("escreveu")
            //file written successfully
        })
    });
    
    

    
    
    // db.close();
    
})



app.use(express.static(path.join(__dirname, 'node_modules')));
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', function(req, res){
    res.sendFile(path.join(__dirname + '/public/index.html'));
    res.send()
})


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
