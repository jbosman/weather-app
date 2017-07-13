import React from 'react';
import WeatherIcons from '../weather-icons';

require('../weather-icons/scss/weather-icons.min.scss');

require('../index.scss');
require('./index.scss');

function CorF(){
	return true ? 'wi-fahrenheit' : 'wi-celsius';
}

function wholeNumber(value){
	return value ? value.toFixed(0) : '';
}

export default function Temperature(props){
	return (
		<div className='indicator temperature'>
			<i 	className={`wi wi-thermometer`}>
				<i className={`wi ${CorF()}` } />
				<div className='high'>{ wholeNumber(props.high) }</div>
				<div className='low'>{ wholeNumber(props.low) }</div>
			</i>
		</div>
	)
}