import React from 'react';

import ConditionsIcon 	from '../../weather-components/weather-icons-custom/conditions-icon';
import Thermometer 	from '../../weather-components/weather-icons-custom/thermometer-icon';
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

	const { isFahrenheit } = props;
			
	return (
		<div className='forecast-weather-info'>
			<ConditionsIcon icon={ icon } />
			<Thermometer
				high = { isDayData ? temperatureMax : temperature } 
				low={ isDayData ? temperatureMin : '' }
				isFahrenheit={isFahrenheit}
			/>
			<PrecipitationProbability probability={ precipProbability }/>
			<Humidity humidity={ humidity } />
		</div>
	)
}