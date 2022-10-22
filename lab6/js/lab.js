/*
 * Author:Alex Jones, Jacquelyn Meek, Tristan Van Dixon
 * Created:   18.10.2023
 * License: Public Domain
 */

// Define Variables
myTransport = ["car", "bike", "bus", "scooter"];

myMainRide = {
  make: "Chevrolet",
  model: "Suburban",
  color: "white",
  year: 2003,
}

// Output
document.writeln("My Use to Moves: ", myTransport, "</br>");
document.writeln("My Car Mobile Wheels: <pre>",
  JSON.stringify(myMainRide, null, '\t'), "</pre>");
