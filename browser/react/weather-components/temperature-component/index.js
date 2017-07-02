import React from 'react';
import WeatherIcons from '../weather-icons';

require('../weather-icons/scss/weather-icons.min.scss');

require('./index.scss');

function CorF(){
	return true ? 'wi-fahrenheit' : 'wi-celsius';
}

function wholeNumber(value){
	return value.toFixed(0);
}

export default function Temperature(props){
	return (
		<div className='temperature'>
			<i 	className={`wi wi-thermometer`}>
				<i className={`wi ${CorF()}` } />
				<span className='high'>{ wholeNumber(props.high) }</span>
				<span className='low'>{ wholeNumber(props.low) }</span>
			</i>
		</div>
	)
}