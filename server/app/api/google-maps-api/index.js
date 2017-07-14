'use strict';

module.exports = app => {
	const axios = require('axios');
	const appVariables = require('../../app-variables');
	const GOOGLE_MAPS_API_URL = 'https://maps.googleapis.com/maps/api/geocode/json?';
	const GOOGLE_MAPS_API_KEY = app.getValue( appVariables.ENV ).GOOGLE_MAPS_API_KEY;
	
	const router = require('express').Router();

	// Request format
	// https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=YOUR_API_KEY

	router.use( '/:lat/:long', (req, res, next) => {

		const { lat, long } = req.params;

		const URL = `${GOOGLE_MAPS_API_URL}latlng=${lat},${long}&key=${GOOGLE_MAPS_API_KEY}`;

		axios.get( URL )
		.then( resp => {
			res.send(resp.data) 
		})
		.catch(next)
	});


	return router;
}