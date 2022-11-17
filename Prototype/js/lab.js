L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxBounds: bounds,
    maxZoom: 19,
    minZoom: 10,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// service input
var lat = request.get("lat");
var lng = request.get("lng");
var url = "https://api.uber.com/v1/products";
var token = "4dPYezRBsWmqpV_XOyhIb2lndGsRfJaYhhXvJBRY";

var parameters = {
  "server_token": token,
  "latitude": lat,
  "longitude": lng
};

// send Ajax request
var res = XHR2.send("GET", url, {
  parameters
});

// response
response.success(res, "application/json");
