/*
 * Author: Alex Jones, Jacquelyn Meek, Tristan Van Dixon
 * Created:   26.10.2022
 * License: Public Domain
 */

//Create function for (x).
function calculationMachine(x) {
  var results = x / 2;
  return results;
}
// Print results using console.log
console.log("What is half of thirty-six?", calculationMachine(36))
console.log("What is half of nine-hundred and two?", calculationMachine(902))

// Create number Array.
var numbers = [36, 23, 78, 12, 45, 61, 94]
console.log("Our array of numbers: ", numbers);

// Use function to calculate each number in the array.
var result = numbers.map(calculationMachine);
// Should return the halves of each number in the array.
console.log("The halves of each number within the array: ", result)

//Create and use function to take new numbers in the array, to calculate (x).
var result = numbers.map(function(x) {
  var result = x ** 2;
  return result;
})

// Should calculate each number in array to the power of 2.
console.log("Array to the power of 2: ", result) 
