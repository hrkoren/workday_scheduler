var today = moment();
$('#currentDay').text(today.format("MMM Do, YYYY"));

function timeFunction() {
var currentTime = moment().hour();
console.log(currentTime);
$('.time-block').each(function(){
    var timeHour = parseInt($(this).attr('id').split('-')[1]);
    console.log(timeHour, currentTime);
    if (timeHour === currentTime) {
        $(this).removeClass('past');
        $(this).addClass('present');
    } else if (timeHour > currentTime) {
        $(this).removeClass('past');
        $(this).addClass('future');
    } else  {
        $(this).removeClass('present');
        $(this).removeClass('future');
        $(this).addClass('past');
    }
});
}
// text entry into plannerBlock and save to local storage upon save
$('.saveBtn').on('click', function(){
    console.log($(this));
   var textArea = $(this).siblings('.description').val();
   console.log(textArea);
   var currentHour = $(this).parent().attr('id');
   console.log(currentHour);
   localStorage.setItem(currentHour, textArea);
})

// $(window).on('load', function(){
//     var textArea = $(this).parent('id').val('.description');
//     // var textArea = parseInt($(this).attr('id'));
//     console.log(textArea);
//     var currentHour = $(this).children().attr('id');
//     console.log(currentHour);
//     localStorage.getItem(currentHour, textArea);
// })


//this works, but would have to do it for each hour
//want to do for all at once
$('#hour-8 .description').val(localStorage.getItem('hour-8'));

timeFunction()
