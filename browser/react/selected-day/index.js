'use strict';

import React from 'react';

import DateInfo from './date-info';

require('./index.scss');

export default function SelectedDay(props){
	return (
		<div className='selected-day'>
			<img src='https://fillmurray.com/200/200' alt='Weather Image' />
			<DateInfo timestamp={props.selected.time} />
			<h3>Weather Data Component</h3>
		</div>
	)

}