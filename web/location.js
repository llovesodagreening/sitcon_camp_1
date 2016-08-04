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

function GPS2Address(Latitude,Longitude){

	var location_api_str = 'http://maps.google.com/maps/api/geocode/json?latlng=' + Latitude + ',' + Longitude + '&language=zh-TW&sensor=true';
	
	//code 
	var request = require('request');
	var address;
	request(location_api_str,function(err, res, body) {
		body = JSON.parse(body);
		address = body.results[0].address_components[5].long_name + ", " + body.results[0].address_components[4].long_name + ", " + body.results[0].address_components[3].long_name;
		return address;
	})
}