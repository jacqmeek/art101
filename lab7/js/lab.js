/*
 * Author: Alex Jones, Jacquelyn Meek, Tristan Van Dixon
 * Created:   25.10.2023
 * License: Public Domain
 */

// Username Function
function scrambleUserName() {
  var userName = window.prompt("Enter your name to get your certfied Frog identity:");
  console.log("userName =", userName);
  // Split userName letter-by-letter into an array.
  var letterArray = userName.split("");
  console.log("letterArray =", letterArray);
  // Sort the letters within the array.
  var letterArraySort = letterArray.sort();
  console.log("letterArraySort =", letterArraySort)
  // Put the letters back together scrambled.
  var letterSorted = letterArraySort.join("");
  console.log("letterSorted =". letterSorted);
  // Return scrambled name.
  return letterSorted;
}

// Output the new name on the site.
document.writeln("You are now a frog named ", scrambleUserName(), ". </br>");
