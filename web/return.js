function LocationReturn(Latitude, Longitude){

 var str = 'http://api.openweathermap.org/data/2.5/weather?lang=zh_tw&units=metric&appid=6c12b939f6a2cf316bae9561a313ce66&lat=' + Latitude + '&lon=' + Longitude ;
}

{
	"coord":{
		"lon":121.53,
		"lat":25.05
	},
	
	"weather":[{
		"id":800,
		"main":"Clear",
		"description":"晴",
		"icon":"01d"
	}],

	"base":"cmc stations",
	
	"main":{
		"temp":33.38,
		"pressure":1003,
		"humidity":50,
		"temp_min":30,
		"temp_max":38.33
	},
	
	"wind":{
		"speed":4.11,
		"deg":300,
		"gust":8.74
	},

	"clouds":{
		"all":0
	},

	"dt":1470299865,
	
	"sys":{
		"type":3,
		"id":256033,
		"message":0.0032,
		"country":"TW",
		"sunrise":1470259379,
		"sunset":1470306994
	},

	"id":1668341,
	"name":"Taipei",
	"cod":200
}

