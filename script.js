var jumborton = document.querySelector(".jumborton");
var lead = document.querySelector(".lead");
var currentDay = document.querySelector("#currentDay");

var containerDiv = document.getElementsByClassName("container");
var timeBockTable = document.querySelector(".time-block");

var inputContent = document.querySelectorAll(".content-input");
// var timeRecorder = document.querySelectorAll(".time-block");

//Storing the time and user input in localStorage
var saveButton = document.querySelectorAll(".svBtn");
for (var i = 0; i < saveButton.length; i++) {

  saveButton[i].addEventListener("click", function() {

    var inputContent = document.getElementById("content-input1").value;
    localStorage.setItem("content-input1", inputContent);
    alert("Event saved in local storage");

    var inputContent = document.getElementById("time1").textContent;
    localStorage.setItem("time1", inputContent);

    var inputContent = document.getElementById("content-input2").value;
    localStorage.setItem("content-input2", inputContent);

    var inputContent = document.getElementById("time2").textContent;
    localStorage.setItem("time2", inputContent);

    var inputContent = document.getElementById("content-input3").value;
    localStorage.setItem("content-input3", inputContent);

    var inputContent = document.getElementById("time3").textContent;
    localStorage.setItem("time3", inputContent);

    var inputContent = document.getElementById("content-input4").value;
    localStorage.setItem("content-input4", inputContent);

    var inputContent = document.getElementById("time4").textContent;
    localStorage.setItem("time4", inputContent);

    var inputContent = document.getElementById("content-input5").value;
    localStorage.setItem("content-input5", inputContent);

    var inputContent = document.getElementById("time5").textContent;
    localStorage.setItem("time5", inputContent);

    var inputContent = document.getElementById("content-input6").value;
    localStorage.setItem("content-input6", inputContent);

    var inputContent = document.getElementById("time6").textContent;
    localStorage.setItem("time6", inputContent);

    var inputContent = document.getElementById("content-input7").value;
    localStorage.setItem("content-input7", inputContent);

    var inputContent = document.getElementById("time7").textContent;
    localStorage.setItem("time7", inputContent);

    var inputContent = document.getElementById("content-input8").value;
    localStorage.setItem("content-input8", inputContent);

    var inputContent = document.getElementById("time8").textContent;
    localStorage.setItem("time8", inputContent);

    var inputContent = document.getElementById("content-input9").value;
    localStorage.setItem("content-input9", inputContent);

    var inputContent = document.getElementById("time9").textContent;
    localStorage.setItem("time9", inputContent);



  });

}

//Displaying the current day at the top of the calendar
var presentDay = moment().format('LLLL');
var x = document.getElementById("currentDay");
x.innerHTML = presentDay;

var test = false;

 // set row color based on time
 updateRowColor($rowDiv, hour);

function updateRowColor ($hourRow,hour) { 

  if (test) { console.log("rowColor ",presentDay, hour); }

  if ( hour < presentDay) {
    // $hourRow.css('')
    if (test) { console.log("lessThan"); }
    $hourRow.css("background-color","lightgrey")
  } else if ( hour > presentDay) {
    if (test) { console.log("greaterthan"); }
    $hourRow.css("background-color","lightgreen")
  } else {
    if (test) { console.log("eqaul"); }
    $hourRow.css("background-color","tomato")
  }
};
