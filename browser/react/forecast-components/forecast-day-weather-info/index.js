import React from 'react';

import ConditionsIndicator 	from '../../weather-components/conditions-indicator';
import Temperature 			from '../../weather-components/temperature-component';

require('./index.scss');

export default function ForecastDayWeatherInfo(props){
	return (
		<div className='forecast-day-weather-info'>
			<ConditionsIndicator icon={props.data.icon} />
			<Temperature 
				low={ props.data.temperatureMin }
				high = { props.data.temperatureMax }
			/>
		</div>
	)
}