// active
const list = document.querySelectorAll(".list");
function activeLink() {
  list.forEach((item) => item.classList.remove("active-nav"));
  this.classList.add("active-nav");
}
list.forEach((item) => item.addEventListener("click", activeLink));

var events = [
  {
    ID: 1,
    Title: "Event 1",
    Date: new Date(),
    Date_2: new Date(),
    Tipo: "Client Meeting",
  },
  {
    ID: 2,
    Title: "Event 2",
    Date: new Date(),
    Date_2: "",
    Tipo: "Team Meeting",
  },
  {
    ID: 3,
    Title: "Event 3",
    Date: new Date(),
    Date_2: new Date(),
    Tipo: "Fun Activity",
  },
];
$(function () {
  $("#datepicker").datepicker();
});
$(function () {
  $("#calendar,#meetCalendar,#meetCalendarweek").datepicker({
    dateFormat: "dd/mm/yy",
    dayNames: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    dayNamesMin: ["S", "M", "T", "W", "T", "F", "S", "S"],
    dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    monthNames: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    monthNamesShort: [
      "Jan",
      "Fev",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    nextText: ">",
    prevText: "<",
    beforeShowDay: function (date) {
      var result = [true, "", null];
      var matching = $.grep(events, function (event) {
        return event.Date.valueOf() === date.valueOf();
      });
      if (matching.length) {
        result = [true, "highlight", matching[0].Title];
      }
      return result;
    },
  });
});

$(function () {
  $.grep(events, function (event) {
    /*1 dia */
    var data = event.Date;
    var dia = data.getDate();
    if (dia.toString().length == 1) {
      dia = "0" + dia;
    }

    var mes = data.getMonth() + 1;
    if (mes.toString().length == 1) {
      mes = "0" + mes;
    }

    var ano = data.getFullYear();
    data_final = dia + "/" + mes + "/" + ano;

    $("#event").append(
      "<div data-date='" +
        data_final +
        "'>" +
        event.Title +
        " - " +
        data_final +
        " - " +
        event.Tipo +
        "</>"
    );
  });
  $("#event").on("click", "div", function () {
    var date = $(this).data("date");
    $("#calendar,#meetCalendar").datepicker("setDate", date);
  });
});
$(".project-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  dots: false,
  responsive: {
    0: {
      items: 1,
    },
    900: {
      items: 2,
    },
    1200: {
      items: 3,
    },
  },
});


//your-groups-carousel
$(".your-grp-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  dots: false,
  responsive: {
    0: {
      items: 1,
    },
    900: {
      items: 2,
    },
    1200: {
      items: 3,
    },
  },
});
//shared group carousel
$(".shared-grp-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  dots: false,
  responsive: {
    0: {
      items: 1,
    },
    900: {
      items: 2,
    },
    1200: {
      items: 3,
    },
  },
});

$(".custom-file").click(function () {
  $(".bg-all").toggleClass("opacitybg");
  $("body").toggleClass("opacitybgnav");
});
