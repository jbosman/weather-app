'use strict';

module.exports = app => {
	app.use('/api/weather', require('./weather-api')(app));
}