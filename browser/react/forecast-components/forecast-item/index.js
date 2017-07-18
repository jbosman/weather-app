'use strict';

import React from 'react';

import DateInfo from '../../common-components/date-info';
import ForecastWeatherInfo from '../forecast-weather-info';
import MoonPhase from '../../weather-components/weather-icons-custom/moon-phase-icon';

require('./index.scss');

export default function ForecastItem(props){
	const { index,
			data,
			isFahrenheit } = props;

	const {
			time,
			isDayData,
			moonPhase } = data;

	return (
		<div className='forecast-item theme-background' onClick={ () => {
			props.clickHandler( data )
		}}>
			<DateInfo timestamp={ time } isDayData={ isDayData } />
			<ForecastWeatherInfo data={data} isFahrenheit={isFahrenheit} />
			{ isDayData ? <MoonPhase phase={ moonPhase } />  : <div></div> }
		</div>
	)
}
