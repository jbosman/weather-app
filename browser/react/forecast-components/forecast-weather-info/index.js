import React from 'react';

import ConditionsIndicator 	from '../../weather-components/conditions-indicator';
import Temperature 			from '../../weather-components/temperature-indicator';

require('./index.scss');

export default function ForecastWeatherInfo(props){
	const { icon, 
			temperature,
			temperatureMax,
			temperatureMin } = props.data ? props.data : '--' ;
			
	return (
		<div className='forecast-weather-info'>
			<ConditionsIndicator icon={ icon } />
			<Temperature
				high = { typeof temperature === 'number' ? temperature : temperatureMax } 
				low={ temperatureMin }
			/>
		</div>
	)
}