const appVariables = require('../../app-variables');
const express = require('express');

module.exports = app => {
	const publicPath = 	app.getValue( appVariables.PUBLIC_PATH );

	app.use( app.get( appVariables.LOG_PATH ) );
	app.use( express.static( publicPath ) );
}