import React from 'react';
import { wholeNumber } from '../utility-functions';

require('../weather-icons/scss/weather-icons.min.scss');

require('./index.scss');

function CorF(){
	return true ? 'wi-fahrenheit' : 'wi-celsius';
}

export default function Temperature(props){
	return (
		<div className='temperature'>
			<i 	className={`wi wi-thermometer`}>
				<i className={`wi ${CorF()}` } />
				<div className='high'>{ wholeNumber(props.high) }</div>
				<div className='low'>{ wholeNumber(props.low) }</div>
			</i>
		</div>
	)
}