'use strict';

const path = require('path');
const morgan = require('morgan');
const appVariables = require('../../app-variables');

const rootPath = 		path.join( __dirname, 	'../../../../' );
const publicPath = 		path.join( rootPath, 	'./public' );
const indexHTMLPath = 	path.join( publicPath, 	'./index.html' );
const environment = 	require( path.join(rootPath, './server/env' ));

module.exports = app => {
	app.setValue( appVariables.ENV, 				environment );
	app.setValue( appVariables.PROJECT_ROOT, 		rootPath );
	app.setValue( appVariables.PUBLIC_PATH, 		publicPath );
	app.setValue( appVariables.INDEX_HTML_PATH, 	indexHTMLPath );
	app.setValue( appVariables.LOG_PATH, 			morgan('dev') );
}