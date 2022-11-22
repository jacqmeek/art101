/*
 * Author: Alex Jones, Jacquelyn Meek, Tristan Van Dixon
 * Created:   11.22.2022
 */

 $("#activate").hover(function() {
   $(".breadman").css("visibility", "visible");
 }, function() {
   $(".breadman").css("visibility", "hidden");
 });

function getAPIData() {
 // Using the core $.ajax() method
  $.ajax({
    url: "https://my-bao-server.herokuapp.com/api/breadpuns",
    type: "GET",
  })

  .done(function(data) {
    console.log(data);
    $("#output").html(data);
  })

  .fail(function(request,error){
    console.log(request,error);
  });
}

 $("#activate").click(getAPIData);
