const path = require('path');

const devConfigPath = 			path.join( __dirname, './development' );
const productionConfigPath = 	path.join( __dirname, './production' );

module.exports = process.env.NODE_ENV === 'production' ?
	require(productionConfigPath)
	: require(devConfigPath);