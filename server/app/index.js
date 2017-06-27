 	'use strict';

const path = require('path');
const express = require('express');
const app = express();
const appVariables = require('./app-variables');

module.exports = () => {
	require('./configure')(app);
	require('./api')(app);

	app.use( (req, res, next) => {
		let error;

		// Middleware to catch any requests for files that haven't
		// been configured on the app previously
		if( path.extname(req.path).length > 0 ){
			error = new Error(`Not Found! ${req.path}`);
			error.status = 404;
			next(error);
		}
		else{
			next();
		}
	});

	app.get( '/*', (req, res, next) => {
		res.sendFile( app.get( appVariables.INDEX_HTML_PATH ) );
	});

	// Error catching endware
	app.use( ( err, req, res, next) => { // eslint-disable-line no-unused-vars
		console.error(err);			// eslint-disable-line no-console
		console.error(err.stack);	// eslint-disable-line no-console
		res.status( err.status || 500 ).send( err.message || 'Internal servor error.');
	});

	return app;
}