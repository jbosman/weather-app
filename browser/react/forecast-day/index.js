'use strict';

import React from 'react';

import DateInfo from '../date-info';
import WeatherInfo from '../weather-info';

require('./index.scss');

export default function ForecastDay(props){
	return (
		<div className='forecast-day' onClick={ () => {
			props.clickHandler(props.dayNum)
		}}>
			<DateInfo timestamp={props.data.time} />
			<WeatherInfo data={props.data} />
		</div>
	)
}