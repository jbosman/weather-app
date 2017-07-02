'use strict';

import React from 'react';

import DateInfo from '../../common-components/date-info';
import ForecastDayWeatherInfo from '../forecast-day-weather-info';

require('./index.scss');

export default function ForecastDay(props){
	return (
		<div className='forecast-day' onClick={ () => {
			props.clickHandler(props.dayNum)
		}}>
			<DateInfo timestamp={props.data.time} />
			<ForecastDayWeatherInfo data={props.data} />
		</div>
	)
}