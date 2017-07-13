'use strict';

import React from 'react';

import DateInfo from '../../common-components/date-info';
import ForecastWeatherInfo from '../forecast-weather-info';
import MoonPhase from '../../weather-components/moon-phase-indicator';

require('./index.scss');

export default function ForecastItem(props){
	const { index,
			data } = props;

			console.log('lala, ', data.isHourOrDay)

	return (
		<div className='forecast-item' onClick={ () => { 
			props.clickHandler( index, data.isHourOrDay )
		}}>
			<DateInfo timestamp={data.time} isHourOrDay={data.isHourOrDay} />
			<ForecastWeatherInfo data={data} />
			{ data.isDayForecast? <MoonPhase phase={data.moonPhase} />  : <div></div> }
		</div>
	)
}
