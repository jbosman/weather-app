'use strict';


module.exports =  app => {
	app.setValue = app.set.bind(app);
	app.getValue = path => app.get(path);

	require('./app-variable-setup')(app);
	require('./static-middleware')(app);
	require('./parsing-middleware')(app);
}