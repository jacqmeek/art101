/*
 * Author: Alex Jones, Jacquelyn Meek, Tristan Van Dixon
 * Created:   11.13.2022
 */

//print numbers 1 to 200
for (var num = 1; num <= 200; num++) {
//set 3, 5, and 7 multiple string
  if (num % 105 == 0) {
    console.log("FizzBuzzBoom!");
  }
//set 5 and 7 multiple string
  else if (num % 35 == 0) {
    console.log("FizzBoom!");
  }
//set 3 and 7 multiple string
  else if (num % 21 == 0) {
    console.log("BuzzBoom!");
  }
//set 3 and 5 multiple string
  else if (num % 15 == 0) {
    console.log("FizzBuzz!");
  }
//set 3 multiple string
  else if (num % 3 == 0) {
    console.log("Buzz!");
  }
//set 5 multiple string
  else if (num % 5 == 0) {
    console.log("Fizz!");
  }
//set 7 multiple string
  else if (num % 7 == 0) {
    console.log("Boom!");
  }
//set any number outside of multiples to print normally.
  else {
    console.log(num);
  }
