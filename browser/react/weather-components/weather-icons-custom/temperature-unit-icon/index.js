'use strict'

import React from 'react';

require('./index.scss');

function CelciusOrFahrenheitIcon(isFahrenheit = true){ return isFahrenheit ? 'wi-fahrenheit' : 'wi-celsius'; }

export default function TemperatureUnit(props){

	const { isFahrenheit = true } = props;

	return (
			<i className={ `temperature-icon wi ${CelciusOrFahrenheitIcon(isFahrenheit)}` }>
			</i>
	)
}