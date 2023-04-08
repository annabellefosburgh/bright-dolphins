// Wrap all code that interacts with the DOM in a call to jQuery
$(function () {
  var now = dayjs().format("MM/DD/YYYY");
  var time12 = dayjs().hour(24);
  var currentHour = dayjs().hour();
  var timeBlocks = $(".time-block");
  var saveBtn = document.getElementById('savebutton');
  var hr9 = document.getElementById('9').innerText;
  var hr10 = document.getElementById('10').innerText;
  var hr11 = document.getElementById('11').innerText;
  var hr12 = document.getElementById('12').innerText;
  var hr13 = document.getElementById('13').innerText;
  var hr14 = document.getElementById('14').innerText;
  var hr15 = document.getElementById('15').innerText;
  var hr16 = document.getElementById('16').innerText;
  var hr17 = document.getElementById('17').innerText;

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
      var get9 = localStorage.getItem('9tasks');
      var get10 = localStorage.getItem('10tasks');
      var get11 = localStorage.getItem('11tasks');
      var get12 = localStorage.getItem('12tasks');
      var get13 = localStorage.getItem('13tasks');
      var get14 = localStorage.getItem('14tasks');
      var get15 = localStorage.getItem('15tasks');
      var get16 = localStorage.getItem('16tasks');
      var get17 = localStorage.getItem('17tasks');
  }
  // TODO: Add code to display the current date in the header of the page.
  var currentDay = document.getElementById('#current4Day');

  //Adding event listener for the save button at the bottom
  $(this).ready(function () { $("savebutton").click(function () {
    var id = $(this).prev().attr("id");
    var text = $.trim($(id).val())
    localStorage.setItem()
  })});
  saveBtn.addEventListener('click', saveToStorage())
  displayStorage();
});
