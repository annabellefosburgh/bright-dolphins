// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  $('.saveBtn').click(function () {
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

  })

  //
  // TODO: Add code to display the current date in the header of the page.

});
