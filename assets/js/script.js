// set the background of each hour
function setBackground(index) {
  var listItemEl = $("#time-table ul").children()[index];
  var descriptionEl = $(listItemEl).find(".description");
  var hour = index + 9;
  var currentHour = moment().hours();
  if (currentHour < hour) {
    $(descriptionEl).addClass("future");
  } else if (currentHour === hour) {
    $(descriptionEl).addClass("present");
  } else if (currentHour > hour) {
    $(descriptionEl).addClass("past");
  }

  $("#time-table ul")
    .children()
    .each(function () {
      var hour = $(this).find(".hour").text;
      if (currentHour > hour) {
        $(timeItemEl).find(".description").addClass("past");
      } else if (currentHour === hour) {
        $(timeItemEl).find(".description").addClass("present");
      } else if (currentHour < hour) {
        $(timeItemEl).find(".description").addClass("future");
      }
    });
}

// create the time table from 9am to 5 pm
function createTimeTable() {
  for (let i = 9; i < 18; i++) {
    if (i < 12) {
      hour = i + "AM";
    } else if (i === 12) {
      hour = "12PM";
    } else if (i > 12) {
      hour = i - 12 + "PM";
    }

    var timeItem = $('<li class="col-12 row "><div class="col-2 col-sm-1 hour">' + hour + '</div><p class="col-8 col-sm-10 description"></p><div class="col-2 col-sm-1 saveBtn"><span class="oi oi-lock-locked"></span></div></li>');
    $("#time-table ul").append(timeItem);
    setBackground(i - 9);
  }
}

createTimeTable();

// click and edit the content
$("#time-table").on("click", "p", function () {
  // console.log("click");
  var text = $(this).text().trim();
  var textInput = $("<textarea>").addClass("col-8 col-sm-10 description").val(text);
  $(this).replaceWith(textInput);
  textInput.trigger("focus");
});

// click other area and stop the editting
$("#time-table").on("blur", "textarea", function () {
  var text = $(this).val().trim();
  var pEl = $("<p>").addClass("col-8 col-sm-10 description").text(text);
  var index = $(this).closest("li").index();

  $(this).replaceWith(pEl);
  setBackground(index);
});
