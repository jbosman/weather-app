import React from 'react';

import ConditionsIcon 	from '../../weather-components/weather-icons-custom/conditions-icon';
import Temperature 	from '../../weather-components/weather-icons-custom/temperature-icon';
import PrecipitationProbability from '../../weather-components/weather-icons-custom/precipitation-probability-icon';
import Humidity from '../../weather-components/weather-icons-custom/humidity-icon';

require('./index.scss');

export default function ForecastWeatherInfo(props){
	const { 
			isDayData,
			icon, 
			temperature,
			temperatureMax,
			temperatureMin,
			precipProbability, 
			humidity } = props.data ? props.data : '--' ;
			
	return (
		<div className='forecast-weather-info'>
			<ConditionsIcon icon={ icon } />
			<Temperature
				high = { isDayData ? temperatureMax : temperature } 
				low={ temperatureMin }
			/>
			<PrecipitationProbability probability={ precipProbability }/>
			<Humidity humidity={ humidity } />
		</div>
	)
}