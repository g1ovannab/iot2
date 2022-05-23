import properties from './properties.json' assert {type:'json'}
// import users from './users.json' assert {type:'json'}


let selectedProperty = ""
let initDate = ""
let finalDate = ""
let selectedTypeOfGrouping = ""

window.onload = function() {

  // loadUsers()
  // on change no user eu pego o valor do usuáruio, escrevo num txt, o outro js lê e faz a consulta das properties
  // e no próprio change do user, já pega as infos pra carregar as propriedades


  // atual problema: nao consigo escrever o user selecionado num arquivo txt nesse script pra mandar pro outro. qualquer coisa eu só ignoro isso. fodase (seria um plus)

  loadProperties()
  // console.log(properties);
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
  if (selectedProperty == "") {
    alert('cannot show the graph without selecting the property')
  } 
  
  console.log('will show the graph')  
});


console.log(properties)


function loadProperties(){
  for (let i = 0; i < properties.length; i++) {
    var option = document.createElement("option");
    option.text = properties[i].name;
    option.value = properties[i].id;
    console.log(option.text)
    
    var select = document.getElementById("property");
    select.appendChild(option);
  }
}

