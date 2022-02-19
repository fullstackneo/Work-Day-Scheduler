// set the background of each hour
function setBackground(hour, el) {
  var currentHour = moment().hours();
  if (currentHour > hour) {
    $(el).find(".description").addClass("past");
  } else if (currentHour === hour) {
    $(el).find(".description").addClass("present");
  } else if (currentHour < hour) {
    $(el).find(".description").addClass("future");
  }
}

// create the time table from 9am to 5 pm
function createTimeTable() {
  for (let i = 9; i < 18; i++) {
    var hour;
    if (i < 12) {
      hour = i + "AM";
    } else if (i === 12) {
      hour = "12PM";
    } else if (i > 12) {
      hour = i - 12 + "PM";
    }
    var Timeblock = $('<li class="col-12 row "><div class="col-2 col-sm-1 hour">' + hour + '</div><div class="col-8 col-sm-10 description"></div><div class="col-2 col-sm-1 saveBtn"><span class="oi oi-lock-locked"></span></div></li>');
    $("#time-table ul").append(Timeblock);
    setBackground(i, Timeblock);
  }
}

createTimeTable();
