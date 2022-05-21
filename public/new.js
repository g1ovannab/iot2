import properties from './properties.json' assert {type:'json'}
import users from './users.json' assert {type:'json'}

import {createRequire} from "module"
const requires = createRequire(import.meta.url)
const fs =  requires("fs")

let selectedUser = ""
window.onload = function() {

  loadUsers()
  // on change no user eu pego o valor do usuáruio, escrevo num txt, o outro js lê e faz a consulta das properties
  // e no próprio change do user, já pega as infos pra carregar as propriedades


  // atual problema: nao consigo escrever o user selecionado num arquivo txt nesse script pra mandar pro outro. qualquer coisa eu só ignoro isso. fodase (seria um plus)

  loadProperties()
  console.log('CLICOU!!')
  // console.log(properties);

  var option = document.createElement("option");
  option.text = properties.property1.name;
  option.value = properties.property1.id;
  console.log(option)

  var select = document.getElementById("property");
  console.log(select)
  select.appendChild(option);
  console.log(select)
}

document.getElementById('user').addEventListener('change', function(){
  selectedUser = this.value
  console.log(selectedUser)
  WriteToFile(selectedUser)
})
// exports.selectedUser = selectedUser


function WriteToFile(data) {
  fs.writeFile('./public/selectedUser.txt', String(data), err => {
    if (err) {
      console.error(err)
      return
    }
    console.log("escreveu selected user")
  })
}


// var myproperties = JSON.parse(properties);
console.log(properties)

function loadUsers(){
  console.log('entrou no load users')
  
  for (let i = 0; i < users.length; i++) {
    var option = document.createElement("option");
    option.text = users[i].name;
    option.value = users[i].id;
    console.log(option.text)
    
    var select = document.getElementById("user");
    select.appendChild(option);
  }
}

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

