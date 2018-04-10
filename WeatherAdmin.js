const fs = require('fs');

function WeatherAdmin(cb) {
	fs.readFile('log.txt','utf-8', (err,data) => {
		cb(err,data);
	});
}

module.exports = WeatherAdmin;
/*
WeatherAdmin(function (err,data) {
	console.log(data);
});
*/
