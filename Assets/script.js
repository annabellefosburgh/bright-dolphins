// Wrap all code that interacts with the DOM in a call to jQuery
$(function () { 
  //formatting variables using dayjs
  var now = dayjs().format("MM/DD/YYYY");
  var currentHour = dayjs().hour();
  var boxes = $(".text-box")

  //Display Current Date
  $("#currentDay").html(now);

  //Functions displaying a class based on the current hour.
  function setClass() {
    boxes.each(function () {
        if ($(this).val() === currentHour) {
            $(this).addClass("present");
        } else if ($(this).val() < currentHour) {
          $(this).addClass("past");
        } else ($(this).val() > currentHour); {
          $(this).addClass("future");
        }
  })};

  // TODO: Add code to display the current date in the header of the page.
  var currentDay = document.getElementById('#current4Day');

  //Adding event listener for the save button at the bottom
  $(".saveBtn").click(function () {
    let box = $(this).prev(".text-box");
    let id = box.attr("id");
    let val = box.val();
    localStorage.setItem(id, val);
  });
  function setValues() {
    boxes.each(function () {
      $(this).val(localStorage.getItem($(this).attr("id")));
    });
    };
    
    setValues ();
    setClass();
  });