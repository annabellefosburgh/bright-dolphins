// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  var now = day.js().format(mm/dd/yyy);
  var time12 = day.js().hour(24);
  var currentHour = day.js().hour()

  for (var i = 9; i < 18; i++) {
    if (i < currentHour) {
      var pastHour = document.getElementById('now');
      now.classList.add('past');
    } else if (i === currentHour) {
      var presentHour = document.getElementById('now');
      now.classList.add('present');
    } else (i > currentHour); {
      var futureHour = document.getElementById('now');
      now.classList.add('future');
    }}
  //

  //Setting tasks written into hour slots to local storage
  function saveToStorage() {
    var hr9 = document.getElementById('9').value;
      localStorage.setItem('9tasks', hr9);
    var hr10 = document.getElementById('10').value;
      localStorage.setItem('10tasks', hr10);
    var hr11 = document.getElementById('11').value;
      localStorage.setItem('11tasks', hr11);
    var hr12 = document.getElementById('12').value;
      localStorage.setItem('12tasks', hr12);
    var hr13 = document.getElementById('13').value;
      localStorage.setItem('13tasks', hr13);
    var hr14 = document.getElementById('14').value;
      localStorage.setItem('14tasks', hr14);
    var hr15 = document.getElementById('15').value;
      localStorage.setItem('15tasks', hr15);
    var hr16 = document.getElementById('16').value;
      localStorage.setItem('16tasks', hr16);
    var hr17 = document.getElementById('17').value;
      localStorage.setItem('17tasks', hr17);
  }   

  //used to display the tasks that were saved
  var get9 = localStorage.getItem(hr9)
    document.getElementById('9').value = get9;
  var get10 = localStorage.getItem(hr10)
    document.getElementById('10').value = get10;
  var get11 = localStorage.getItem(hr11)
    document.getElementById('11').value = get11;
  var get12 = localStorage.getItem(hr12)
    document.getElementById('12').value = get12;
  var get13 = localStorage.getItem(hr13)
    document.getElementById('13').value = get13;
  var get14 = localStorage.getItem(hr14)
    document.getElementById('14').value = get14;
  var get15 = localStorage.getItem(hr15)
    document.getElementById('15').value = get15;
  var get16 = localStorage.getItem(hr16)
    document.getElementById('16').value = get16;
  var get17 = localStorage.getItem(hr17)
    document.getElementById('17').value = get17;

  // TODO: Add code to display the current date in the header of the page.
  var currentDay = document.getElementById('#currentDay');
  currentDay.textContent = now.val;

  //Adding event listener for the save button at the bottom
  saveBtn.addEventListener('click', saveToStorage())

});
