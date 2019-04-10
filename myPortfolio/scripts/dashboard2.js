// Geo location
var myLocation = document.getElementById("my-coordinates")

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(displayPosition)
  } else {
    myLocation.innerHTML = "Not available"
  }
}

// exact coordinates
function displayPosition(position) {
  myLocation.innerHTML = "Longitude: " + position.coords.longitude + " Latitude: " + position.coords.latitude
}

// add new ToDo items
$(function () {
  let $list = $('ul');
  let $newItemForm = $('#newItemForm');

  $newItemForm.on('submit', function (e) {
    e.preventDefault();
    let text = $('input[type="text"]').val();
    $list.append(`<li>${text}</li>`);
    $('input[type="text"]').val('');
  });

  $list.on('click', 'li', function () {
    let $this = $(this);
    $this.remove();
  });

});

// My click destresser
function myMove() {
  var elem = document.getElementById("myAnimation");
  var pos = 0;
  var id = setInterval(frame, 10);
  function frame() {
    if (pos == 200) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.top = pos + 'px';
      elem.style.left = pos + 'px';
    }
  }
}

// calendar header
let _ = selector => {
  return document.querySelector(selector);
};
let __ = selector => {
  return document.querySelectorAll(selector);
};

let drawCalendar = dateObj => {
  _(".calendar-header").innerHTML = "";
  _(".calendar-body").innerHTML = "";

  let dateInstance = dateObj || new Date();

// days of the week
  let dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  let date = dateInstance.getDate();

  let day = dateInstance.getDay();

  let dayName = dayNames[day];

  let month = dateInstance.getMonth();

  // months of the year
  let monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];

  let year = dateInstance.getFullYear();

  let daysInAMonth = new Date(year, month + 1, 0).getDate();

  let indexOfTheStartDay = new Date(year, month, 1).getDay();

  let header = _(".calendar-header");
  let headerTemplate = "";
  dayNames.forEach(function (i) {
    headerTemplate += `
      <div class="day-name">${i}</div>
    `;
  });

    header.innerHTML = headerTemplate;
  let body = _(".calendar-body");

  let offsetTemplate = `<div class="day"></div>`.repeat(indexOfTheStartDay);
  let bodyTemplate = offsetTemplate;

  for (let i = 1; i <= daysInAMonth; i++) {
    bodyTemplate += `<div class="day">${i}</div>`;
  }
  body.innerHTML = bodyTemplate;

  let monthsTemplate = "";
  for (let i = 0; i < monthNames.length; i++) {
    let property = i == month ? "selected" : "";
    monthsTemplate += `<option value="${i}" ${property}>${monthNames[
        i
      ]}</option>`;
  }
  _("#months").innerHTML = monthsTemplate;

  let yearTemplate = "";
  for (let i = new Date().getFullYear(); i > 1990; i--) {
    let property = i == year ? "selected" : "";
    yearTemplate += `<option value="${i}" ${property}>${i}</option>`;
  }

  _("#years").innerHTML = yearTemplate;
};

drawCalendar();

__("#years, #months").forEach(function (ref) {
  ref.addEventListener("change", function () {
    let dateInstance = new Date();
    let year = _("#years").value || dateInstance.getFullYear();
    let month = _("#months").value || dateInstance.getMonth();
    drawCalendar(new Date(year, month));
  });
});