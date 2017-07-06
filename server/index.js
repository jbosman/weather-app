'use strict';

const chalk = 	require('chalk');

(function startServer(){

	const PORT = process.env.PORT || 3000;
	const app = require('./app')();

	app.listen(  PORT, () => { 
		console.log(`${chalk.blue('Listening on port')} ${chalk.magenta(PORT)}${chalk.blue('!')}`); 
	})
}());

