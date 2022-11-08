/*
 * Author: Alex Jones, Jacquelyn Meek, Tristan Van Dixon
 * Created:   11.7.2022
 */


// Find div ids and append a button to each id.
$("#challenges").append("<button id='challengesButton'>CHANGE IT UP</button>");

$("#problems").append("<button id='problemsButton'>CHANGE IT UP</button>");

$("#results").append("<button id='resultsButton'>CHANGE IT UP</button>");


//Establish an event listener for a click that changes the css of the divs from before.
$("#challengesButton").click(function(){
  $(this).parent().toggleClass("special");
})

$("#problemsButton").click(function(){
  $(this).parent().toggleClass("special");
})

$("#resultsButton").click(function(){
  $(this).parent().toggleClass("special2");
})
