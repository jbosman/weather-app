'use strict';

import React from 'react';

import DateInfo from './date-info';
import WeatherInfo from './weather-info';

require('./index.scss');

export default function SelectedDay(props){
	return (
		<div className='selected-day'>
			<DateInfo timestamp={props.selected.time} />
			<WeatherInfo data={props.selected} />
		</div>
	)

}