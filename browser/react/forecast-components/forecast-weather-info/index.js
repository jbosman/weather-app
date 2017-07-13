import React from 'react';

import Conditions 	from '../../weather-components/conditions-indicator';
import Temperature 	from '../../weather-components/temperature-indicator';
import PrecipitationProbability from '../../weather-components/precipitation-probability-indicator';

require('./index.scss');

export default function ForecastWeatherInfo(props){
	const { icon, 
			temperature,
			temperatureMax,
			temperatureMin,
			precipProbability } = props.data ? props.data : '--' ;
			
	return (
		<div className='forecast-weather-info'>
			<Conditions icon={ icon } />
			<Temperature
				high = { typeof temperature === 'number' ? temperature : temperatureMax } 
				low={ temperatureMin }
			/>
			<PrecipitationProbability probability={ precipProbability }/>
		</div>
	)
}