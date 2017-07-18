import React from 'react';

import TemperatureUnit from '../temperature-unit-icon';
import Temperature from '../temperature-value-icon';

require('../../weather-icons/scss/weather-icons.min.scss');

require('./index.scss');

export default function Thermometer(props){

	const {
		high,
		low,
		isFahrenheit
	} = props;

	return (
		<div className='thermometer'>
			<i 	className={`wi wi-thermometer`}>
				<TemperatureUnit isFahrenheit={isFahrenheit} />
				<Temperature className='high' value={high} isFahrenheit={isFahrenheit} />
				<Temperature className='low'  value ={low} isFahrenheit={isFahrenheit}/>
			</i>
		</div>
	)
}