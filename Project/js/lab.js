//Hide Overlays in the beginning
$('#Overlay1').hide("Overlay1");
$('#Overlay2').hide("Overlay2");
$('#Overlay3').hide("Overlay3");
$('#Overlay4').hide("Overlay4");

//Code for overlays. When the button is clicked a count is kept to determine whether the overlay is on or off.
//Counting Variable
var num1;
num1 = 0;
$('#Thing1').click(function () {
    //checks if count is even
    if (num1 % 2 == 0) {
        $('#Overlay1').show("Overlay1");
        num1 += 1;
    }
    //checks if count is odd
    else {
        $('#Overlay1').hide("Overlay1");
        num1 += 1;
    }
});

//Counting Variable
var num2;
num2 = 0;
$('#Thing2').click(function () {
    //checks if count is even
    if (num2 % 2 == 0) {
        $('#Overlay2').show("Overlay2");
        num2 += 1;
    }
    //checks if count is odd
    else {
        $('#Overlay2').hide("Overlay2");
        num2 += 1;
    }
});

//Counting Variable
var num3;
num3 = 0;
$('#Thing3').click(function () {
    //checks if count is even
    if (num3 % 2 == 0) {
        $('#Overlay3').show("Overlay3");
        num3 += 1;
    }
    //checks if count is odd
    else {
        $('#Overlay3').hide("Overlay3");
        num3 += 1;
    }
});

//Counting Variable
var num4;
num4 = 0;
$('#Thing4').click(function () {
    //checks if count is even
    if (num4 % 2 == 0) {
        $('#Overlay4').show("Overlay4");
        num4 += 1;
    }
    //checks if count is odd
    else {
        $('#Overlay4').hide("Overlay4");
        num4 += 1;
    }
});

//popup
window.addEventListener("load", function () {
    setTimeout(
        function open(event) {
            document.querySelector(".popup").style.display = "block";
        },
        1000
    )
});
document.querySelector("#close").addEventListener("click", function () {
    document.querySelector(".popup").style.display = "none";
});

//map bounds
var southWest = L.latLng(36.94, -122.11),
    northEast = L.latLng(37.04, -121.96),
    bounds = L.latLngBounds(southWest, northEast);

var map = L.map('map', {
    center: [36.99, -122.06],
    zoom: 15,
    maxBounds: bounds,
    maxZoom: 19,
    minZoom: 13
});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxBounds: bounds,
    maxZoom: 19,
    minZoom: 13,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

//map markers
var marker = L.marker([36.99, -122.06]).addTo(map);
