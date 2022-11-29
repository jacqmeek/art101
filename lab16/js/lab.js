/*
 * Author: Alex Jones, Jacquelyn Meek, Tristan Van Dixon
 * Created:   11.28.2022
 */

var comicObj = "https://xkcd.com/info.0.json";

$.ajax({
      // The URL for the request (from the api docs)
      url: comicObj,
      type: "GET",
      dataType: "json",
      success: function(comicObj) {
        console.log(comicObj.title);
        console.log(comicObj.img);
        console.log(comicObj.alt);
        $("#output").append("<h3>" + comicObj.title + "</h3>");
        $("#output").append("<img src=" + comicObj.img + ">");
        $("#output").append("<p>" + comicObj.alt + "</p>");
          },
          // What we do if the api call fails
          error: function(jqXHR, textStatus, errorThrown) {
            // do stuff
            console.log("Error:", textStatus, errorThrown);
          }
      })
