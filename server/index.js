'use strict';

const chalk = 	require('chalk');

(function startServer(){

	const PORT = process.env.PORT || 3000;
	const app = require('./app')();

	app.listen(  PORT, () => { 
		console.log(`${chalk.blue('Listening on port')} ${chalk.magenta(PORT)}${chalk.blue('!')}`); 
	})
}());

// const ROOT = path.join(__dirname, '../');
// const IndexHTML = path.join(ROOT, 'browser/index.html');
// const PUBLIC = path.join(ROOT, 'public');

// app.use(express.static(PUBLIC));

// app.get('/', (req, res) => { res.sendFile(IndexHTML) });

