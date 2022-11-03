// Author : Jacquelyn Meek, Alex Jones, Tristan Van Dixon
// Date 11.3.22


function scrambleUserName(enterName) {
  var userName = enterName;


  var letterArray = userName.split('');


  var letterArraySort = letterArray.sort();

  // Put the letters back together scrambled.
  var letterSorted = letterArraySort.join("");

  // Return scrambled name.
  return letterSorted;
}

var buttonEl = document.getElementById("my-button");

var outputEl = document.getElementById("output");

buttonEl.addEventListener("click", function() {
  var enteredName = document.getElementById("user-name").value
  var sortedName = scrambleUserName(enteredName);
  outputEl.innerHTML = sortedName;
})
