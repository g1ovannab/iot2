var selectedProperty = "", initDate = "", finalDate = "", selectedTypeOfGrouping = ""
  
document.getElementById("toDate").max = new Date().toISOString().split("T")[0];
document.getElementById("fromDate").max = new Date().toISOString().split("T")[0];

document.getElementById('property').addEventListener('change', function(){
  selectedProperty = this.value
});

document.getElementById('typeOfGroup').addEventListener('change', function(){
  selectedTypeOfGrouping = this.value
});

document.getElementById('fromDate').addEventListener('change', function(){
  initDate = this.value
  console.log(initDate)
  document.getElementById("toDate").min = initDate
});

document.getElementById('toDate').addEventListener('change', function(){
  finalDate = this.value
  console.log(finalDate)
  document.getElementById("fromDate").max = finalDate
});

document.getElementById('showGraph').addEventListener('click', function() {
  if (selectedProperty == "" || (initDate == "" && finalDate == "") || selectedTypeOfGrouping == "") {
    alert('cannot show the graph without selecting the property')
  } else { console.log('will show the graph') }

}) 