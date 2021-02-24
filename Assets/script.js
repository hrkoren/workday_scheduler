var today = moment();
$('#currentDay').text(today.format("MMM Do, YYYY"));

// function timeFunction() {
// var currentTime = moment().hour();
// var hour = document.getElementsByClassName('.hour');
// var timeBlock = document.getElementsByTagName('textarea');

// if (hour === currentTime) {
// timeBlock.setAttribute('class', '.present');

//  } else if (hour < curentTime) {
//      timeBlock.setAttribute('class', '.past');
//  } else {
//      timeBlock.setAttribute('class', '.future');
//  }
// }

var currentTime = moment().hour();
var currentHour = getElementsByClassName('.hour');
var textArea = document.getElementsByTagName('textarea');
var pastTime = document.getElementsByClassName('hour', '.past');
if (currentHour === currentTime) {
    textArea.classname = '.present';
} else (currentHour > currentTime) 
    textArea.setAttribute('textarea', '.future');



