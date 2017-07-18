'use strict'

import React from 'react';

import { toCelcius, wholeNumber } from '../../utility-functions';

require('./index.scss');

function getTemperature(value, isFahrenheit){
	if( typeof value === 'number' )
		return wholeNumber( isFahrenheit ? value : toCelcius(value) );
	else if (typeof value === 'string' )
		return value;
	else 
		return '--'
}

export default function Temperature(props){

	const {
		value,
		isFahrenheit = true,
		className
	} = props;

	return (
		<span className={`temperature ${className}`}>
		{ getTemperature(value, isFahrenheit) }
		</span>
	)
}