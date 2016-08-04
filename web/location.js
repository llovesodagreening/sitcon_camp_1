var x = document.getElementById("demo");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}
//Latitude 
function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude; 
}

var location_api_str = 'http://maps.google.com/maps/api/geocode/json?latlng=' + Latitude + ',' + Longitude + '&language=zh-TW&sensor=true';

