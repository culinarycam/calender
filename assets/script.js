$(function () {
  var hour = dayjs().hour() - 9;

  $('.time-block').each(function() {
    var id = $(this).attr('id').split('-')[1];
    var rowHour = parseInt(id);

$(document).on('click', '.saveBtn', function() {
  var key = $(this).closest('.time-block').attr('id');
  var text = $(this).prev().val();
  localStorage.setItem(key, text)
});

  $('.time-block').each(function() {
    var id = $(this).attr('id');
    var textarea = $(this).find('.description');
    var text = localStorage.getItem(id);
  textarea.val(text)
  });
    if (hour < rowHour) {
      $(this).addClass('future');
    } else if (hour > rowHour) {
      $(this).addClass('past');
    } else {
      $(this).addClass('present');
    }
  });

  const d = new Date();
document.getElementById("date and time").innerHTML = d;
});
