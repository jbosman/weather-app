import React from 'react';

import Conditions 	from '../../weather-components/conditions-indicator';
import Temperature 	from '../../weather-components/temperature-indicator';
import PrecipitationProbability from '../../weather-components/precipitation-probability-indicator';
import Humidity from '../../weather-components/humidity-indicator';

require('./index.scss');

export default function ForecastWeatherInfo(props){
	const { 
			isDayForecast,
			icon, 
			temperature,
			temperatureMax,
			temperatureMin,
			precipProbability, 
			humidity } = props.data ? props.data : '--' ;
			
	return (
		<div className='forecast-weather-info'>
			<Conditions icon={ icon } />
			<Temperature
				high = { isDayForecast ? temperature : temperatureMax } 
				low={ temperatureMin }
			/>
			<PrecipitationProbability probability={ precipProbability }/>
			<Humidity humidity={ humidity } />
		</div>
	)
}