import properties from './properties.json' assert {type:'json'}

// let selectedProperty = ""
// let initDate = ""
// let finalDate = ""
// let selectedTypeOfGrouping = ""

// window.onload = function() {
//   // loadProperties()
// }

// document.getElementById('property').addEventListener('change', function(){
//   selectedProperty = this.value
//   console.log(selectedProperty)
// })

// document.getElementById('typeOfGroup').addEventListener('change', function(){
//   selectedTypeOfGrouping = this.value
//   console.log(selectedTypeOfGrouping)
// });

// document.getElementById('fromDate').addEventListener('change', function(){
//   initDate = this.value
//   console.log('fromDate changed to ' + initDate)
//   // var toDate = document.getElementById("toDate");
//   document.getElementById("toDate").min = initDate
// })


// document.getElementById('toDate').addEventListener('change', function(){
//   finalDate = this.value
//   console.log('toDate changed to ' + finalDate)
//   // var fromDate = document.getElementById("fromDate");
//   document.getElementById("fromDate").max = finalDate
// })

// document.getElementById('showGraph').addEventListener('click', function() {
//   if (selectedProperty == "" || (initDate == "" && finalDate == "") || selectedTypeOfGrouping == "") {
//     alert('cannot show the graph without selecting the property')
//   } 
  
//   console.log('will show the graph') 
//   //mandar aqui as informações pro sqlite de alguma forma fazer isso funcionar 
//   // db.serialize(function() {
//   //   db.each("select ('[' || group_concat(json_object('id', id, 'name', name, 'type', type)) || ']') as 'row' from (select * from property where id_user = 1)", function(err, row) {
//   //     if (err) return console.log(err.message)    
      
//   //     console.log("sqlite do new.js")
//   //   })
//   // });

//   alert("oi")

// });

// console.log(properties)

// function loadProperties(){
//   for (let i = 0; i < properties.length; i++) {
//     var option = document.createElement("option");
//     option.text = properties[i].name;
//     option.value = properties[i].id;
//     console.log(option.text)
    
//     var select = document.getElementById("property");
//     select.appendChild(option);
//   }
// }

