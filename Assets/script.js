var today = moment();
$('#currentDay').text(today.format("MMM Do, YYYY"));

// function timeFunction() {
// var currentTime = moment().hour();
// var hour = document.querySelectorAll('#hour8 #hour9 #hour10 #hour11 #hour12 #hour13 #hour14 #hour15 #hour16 #hour17');
// var plannerBlock = document.getElementsByTagName('.time-block');

// if (hour === currentTime) {
// plannerBlock.setAttribute('class', '.present');

//  } else  (hour < currentTime) 
//     plannerBlock.setAttribute('class', '.future');
// }

var currentTime = moment().hour();
var currentHour = document.querySelectorAll('#hour8 #hour9 #hour10 #hour11 #hour12 #hour13 #hour14 #hour15 #hour16 #hour17');
var plannerBlock = document.getElementsByClassName('.description');
var pastTime = document.getElementsByClassName('.past');
if (currentHour === currentTime) {
    plannerBlock.classname = '.present';
} else (currentHour > currentTime) 
    plannerBlock.classname = '.future';


//text entry into plannerBlock and save to local storage upon save

