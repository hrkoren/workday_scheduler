var today = moment();
$('#currentDay').text(today.format("MMM Do, YYYY"));

//pull saved info from local storage
//check current time and color-code text areas based on time
function timeFunction() {
var currentTime = moment().hour();
console.log(currentTime);
$('.time-block').each(function(index){
    var timeHour = parseInt($(this).attr('id').split('-')[1]);
    console.log(timeHour, currentTime);
    $('#hour-' + timeHour + ' .description').val(localStorage.getItem('hour-' + timeHour));
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
// text entry into text area and save to local storage upon save
$('.saveBtn').on('click', function(){
   console.log($(this));
   var textArea = $(this).siblings('.description').val();
   console.log(textArea);
   var currentHour = $(this).parent().attr('id');
   console.log(currentHour);
   localStorage.setItem(currentHour, textArea);
})

timeFunction()
