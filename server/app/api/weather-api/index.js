'use strict';

module.exports = app => {
	const axios = require('axios');
	const appVariables = require('../../app-variables');
	const WEATHER_API_URL = 'https://api.darksky.net/forecast';
	const WEATHER_API_KEY = app.getValue( appVariables.ENV ).WEATHER_API_KEY;
	const WEATHER_API_START = `${WEATHER_API_URL}/${WEATHER_API_KEY}`;
	const CURRENT_QUERY = 	`?exclude=[minutely,hourly,daily,alerts,flags]`;
	const WEEK_QUERY = 		`?exclude=[currently,minutely,hourly,alerts,flags]`;
	const CURRENT_AND_WEEK_QUERY = `?exclude=[minutely,hourly,alerts,flags]`;

	const router = require('express').Router();

	function getQueryType(type){
		switch(type){
			case 'current': 
				return CURRENT_QUERY;
			case 'week': 
				return WEEK_QUERY;
			default: 
				return CURRENT_AND_WEEK_QUERY;
		}
	}

	function getWeatherData( req, res, next, type = ''){
		
		let queryType = getQueryType(type);

		const URL = `${WEATHER_API_START}/${req.params.lat},${req.params.long}${queryType}`;
		
		axios.get( URL )
		.then( resp => {
			res.send(resp.data) 
		})
		.catch(next)
	}

	router.use( '/:lat/:long/current', (req, res, next) => {
		getWeatherData(req, res, next, 'current');
	});

	router.use( '/:lat/:long/week', (req, res, next) => {
		getWeatherData(req, res, next, 'week');
	});

	router.use( '/:lat/:long', (req, res, next) => {
		getWeatherData(req, res, next );
	});


	return router;
}
