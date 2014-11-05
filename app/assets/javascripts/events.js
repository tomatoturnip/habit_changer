// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
// You can use CoffeeScript in this file: http://coffeescript.org/

$(document).ready(function() {
    $('#calendar').fullCalendar({
        header: {
          left: 'prev,next today',
          center: 'title',
          right: 'month,agendaWeek,agendaDay'
        },
        events: '/events.json',
        editable: true,
        eventDrop: function(event, delta, revertFunc) {
          alert(event.title + " was dropped on " + event.start.format());

          if (!confirm("Are you sure about this change?")) {
            revertFunc();
          }
        }
    });

    // $('#calendar').fullCalendar({ events: '/events.json' });

        // eventBackgroundColor: 'rgb(255,0,0)',
        // eventTextColor: 'white',

        // dayClick: function(date, jsEvent, view) {
        //   $(this).css('background-color', 'green')
        // }

     // });


});
