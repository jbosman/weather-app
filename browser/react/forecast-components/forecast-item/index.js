'use strict';

import React from 'react';

import DateInfo from '../../common-components/date-info';
import ForecastWeatherInfo from '../forecast-weather-info';
import MoonPhase from '../../weather-components/moon-phase-indicator';

require('./index.scss');

export default function ForecastItem(props){
	const { index,
			data } = props;

	const {
			time,
			isDayData,
			moonPhase } = data;

	return (
		<div className='forecast-item theme-background' onClick={ () => {
			props.clickHandler( data )
		}}>
			<DateInfo timestamp={ time } isDayData={ isDayData } />
			<ForecastWeatherInfo data={data} />
			{ isDayData ? <MoonPhase phase={ moonPhase } />  : <div></div> }
		</div>
	)
}
