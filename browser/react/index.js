'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

require('../favicon.ico');
require('../index.html');

require('./index.scss');

ReactDOM.render(
	<App />,
	document.getElementById('app')
);

