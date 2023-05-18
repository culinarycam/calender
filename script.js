// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

//added listener function
$(function () {
  var hour = dayjs().hour() - 9;
  console.log(hour);
  $('.time-block').each(function() {
    var id = $(this).attr('id').split('-')[1];
    var rowHour = parseInt(id);

    if (hour < rowHour) {
      $(this).addClass('future');
    } else if (hour > rowHour) {
      $(this).addClass('past');
    } else {
      $(this).addClass('present');
    }
  });
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  $(function() {
    var date = new Date(),
    currentDate = date.getFullYear() + "-" + (date.getMonth()+1) + "-" + date.getDate();
    currentDate=Date.parse(currentDate);
    $(".grid-item").each(function() {
       var specifiedDate = $(this).data('date');
       specifiedDate=Date.parse(specifiedDate);
       if (specifiedDate == currentDate) {
         $(this).addClass('today');
       }else if (currentDate > specifiedDate) {
         $(this).addClass('past');
       }else {
         $(this).addClass('future');
       }
   });
});
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  //TODO add date 
  
});
