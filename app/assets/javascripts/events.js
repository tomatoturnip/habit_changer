// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
// You can use CoffeeScript in this file: http://coffeescript.org/

$(document).ready(function() {
    $('#calendar').fullCalendar({
        events: '/events.json',

        eventBackgroundColor: 'rgb(255,0,0)',

        eventTextColor: 'white',

        dayClick: function(date, jsEvent, view) {
          $(this).css('background-color', 'green')
        }

     });






});
