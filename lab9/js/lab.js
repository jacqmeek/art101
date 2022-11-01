/*
 * Author: Alex Jones, Jacquelyn Meek, Tristan Van Dixon
 * Created:   30.10.2022
 * License: Public Domain
 */

  var outputEl = document.getElementById("output");

  var new1El = document.createElement("p");
  new1El.innerHTML = "The First of November";

  var new2El = document.createElement("p");
  new2El.innerHTML = "November 1st, that is today.";

outputEl.appendChild(new1El);
outputEl.appendChild(new2El);
