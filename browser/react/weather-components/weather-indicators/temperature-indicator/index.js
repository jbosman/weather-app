'use strict'

import React from 'react';

import Temperature from '../../weather-icons-custom/temperature-value-icon'
import TemperatureUnit from '../../weather-icons-custom/temperature-unit-icon';

require('./index.scss');

function hourOrDay(temperature){
	return typeof temperature === 'number';
}

export default function TemperatureIndicator(props){

	const {
		temperature,
		high,
		low,
		isFahrenheit
	} = props;

	return (
		<div className='temperature-indicator'>
			<div className='heading'>Temperature</div>
			{
				hourOrDay(temperature) ?
					<div className='temperature-details'>
						<div className='current'>
							<Temperature value={temperature} isFahrenheit={isFahrenheit} />
							<TemperatureUnit isFahrenheit={isFahrenheit} />
						</div>
					</div>
					:(
					<div className='temperature-details'>
						<div className='high'>
							<div className='heading'>High </div>
							<Temperature value={high} isFahrenheit={isFahrenheit} />
							<TemperatureUnit isFahrenheit={isFahrenheit} />
						</div>
						<div className='low'>
							<div className='heading'>Low</div>
							<Temperature value={low} isFahrenheit={isFahrenheit} />
							<TemperatureUnit isFahrenheit={isFahrenheit} />
						</div>
					</div>
					)
			}
		</div>
	)
}