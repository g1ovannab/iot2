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
  console.log(this.value)
  document.getElementById("toDate").min = initDate
});

document.getElementById('toDate').addEventListener('change', function(){
  finalDate = this.value
  console.log(this.value)
  document.getElementById("fromDate").max = finalDate
});

document.getElementById('showGraph').addEventListener('click', function() {
  if (selectedProperty == "" || (initDate == "" && finalDate == "") || selectedTypeOfGrouping == "") {
    alert('cannot show the graph without selecting the property')
  } else { console.log('will show the graph') }

  // let all = [selectedProperty, initDate, finalDate, selectedTypeOfGrouping]
  // window.postMessage("http://localhost:3000/", {
  //   property: selectedProperty,
  //   init: initDate,
  //   final: finalDate,
  //   grouping: selectedTypeOfGrouping
  // })

    // $.post("http://localhost:3000/", {
    //   property: selectedProperty,
    //   init: initDate,
    //   final: finalDate,
    //   grouping: selectedTypeOfGrouping
    // });

  }) 
    
  // $(function() {
  //   console.log("$$$$$$$$$")
  // })
  
  // var user,pass;
  // $("#submit").on('click', function(){
  //   user=$("#user").val();
  //   pass=$("#password").val();
  //   $.post("http://localhost:3000/login",{user: user,password: pass}, function(data){
  //     if(data === 'yes') {
  //         alert("login success");
  //       }
  //   });
  // });













// let selectedProperty = ""
// let initDate = ""
// let finalDate = ""
// let selectedTypeOfGrouping = ""

// export function getSelectedProperty() {
//   $('#property').on('change', function(){
//     console.log(selectedProperty)
//     return this.value
//   })
// }

// export function getSelectedTypeOfGrouping() {
//   $('#typeOfGroup').on('change', function(){
//     console.log(selectedTypeOfGrouping)
//     return this.value 
//   })
// }

// export function get () {
//   $('#fromDate').on('change', function(){
//     console.log('fromDate changed to ' + this.value)
//     $('#toDate').min = this.value
//     return this.value
//   })
// }

// export function getFinalDate() {
//   $('#toDate').on('change', function(){
//     console.log('toDate changed to ' + this.value)
//     $('#fromDate').max = this.value
//     return this.value
//   })

// }

// export function get
// $('#showGraph').on('click', function() {
//   if (selectedProperty == "" || (initDate == "" && finalDate == "") || selectedTypeOfGrouping == "") {
//       alert('cannot show the graph without selecting the property')
//   } 
  
//   console.log('will show the graph') 
// });

