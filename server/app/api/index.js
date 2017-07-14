'use strict';

module.exports = app => {
	app.use('/api/weather', require('./weather-api')(app));
	app.use('/api/reverse-geolocation', require('./google-maps-api')(app));
}