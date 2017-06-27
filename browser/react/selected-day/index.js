'use strict';

import React from 'react';

require('./index.scss');

export default function SelectedDay(props){
	return (
		<div className='selected-day'>
			<img src='https://fillmurray.com/200/200' alt='Weather Image' />
			<h3>Date Info Component</h3>
			<h3>Weather Data Component</h3>
		</div>
	)

}