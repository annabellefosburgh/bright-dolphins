// Wrap all code that interacts with the DOM in a call to jQuery
$(function () {
  var now = dayjs().format("MM/DD/YYYY");
  var time12 = dayjs().hour(24);
  var currentHour = dayjs().hour();
  var timeBlocks = $(".time-block");
  var saveBtn = document.getElementById('savebutton');
  var hr9 = document.getElementById('9').value;
  var hr10 = document.getElementById('10').value;
  var hr11 = document.getElementById('11').value;
  var hr12 = document.getElementById('12').value;
  var hr13 = document.getElementById('13').value;
  var hr14 = document.getElementById('14').value;
  var hr15 = document.getElementById('15').value;
  var hr16 = document.getElementById('16').value;
  var hr17 = document.getElementById('17').value;

  //Display Current Date
  $("#currentDay").html(now);

  $(".time-block").each(function () {
    var timeDiv = $(this).attr("id")
    if (currentHour == timeDiv) {
      $(this).addClass("present");
      $(this).children(".description").addClass("white-text");
    } else if (currentHour < timeDiv) {
      $(this).removeClass("present");
      $(this).addClass("future");
    } else if (currentHour > timeDiv) {
      $(this).removeClass("future");
      $(this).addClass("past");
    }
  });

  //Setting tasks written into hour slots to local storage
  function saveToStorage() {
      localStorage.setItem('9tasks', hr9);
      localStorage.setItem('10tasks', hr10);
      localStorage.setItem('11tasks', hr11);
      localStorage.setItem('12tasks', hr12);
      localStorage.setItem('13tasks', hr13);
      localStorage.setItem('14tasks', hr14);
      localStorage.setItem('15tasks', hr15);
      localStorage.setItem('16tasks', hr16);
      localStorage.setItem('17tasks', hr17);
  }  
  
  //used to display the tasks that were saved
  function displayStorage() {
      var get9 = localStorage.getItem(hr9);
      var get10 = localStorage.getItem(hr10);
      var get11 = localStorage.getItem(hr11);
      var get12 = localStorage.getItem(hr12);
      var get13 = localStorage.getItem(hr13);
      var get14 = localStorage.getItem(hr14);
      var get15 = localStorage.getItem(hr15);
      var get16 = localStorage.getItem(hr16);
      var get17 = localStorage.getItem(hr17);
  }
  // TODO: Add code to display the current date in the header of the page.
  var currentDay = document.getElementById('#currentDay');

  //Adding event listener for the save button at the bottom
  saveBtn.addEventListener('click', saveToStorage())
  displayStorage();
});
