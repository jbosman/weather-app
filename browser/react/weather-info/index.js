'use strict'

import React from 'react';
import WeatherIcons from '../weather-icons';

require('../weather-icons/scss/weather-icons.min.scss');
require('./index.scss');

function isValueReady(value){ 
	return typeof value === 'number'; 
}

function formatToWholeNum(value){ 
	return value.toFixed(0); 
}

function formatToPercentage(value){ 
	return formatToWholeNum(value * 100)  + '%' 
}

function wholeValue(value){
	return isValueReady(value) ? formatToWholeNum(value) : '--';
}

function wholePercentage(value){
	return isValueReady(value) ? formatToPercentage(value) : '-- %';
}

function hideCurrentTemp(value){
	return typeof value === 'number' ? '' : 'hideCurrentTemp' ;
}

export default function WeatherInfo(props){
	return (
		<div className='weather-info'>
			<div className='conditions-container'>
				<i className={`wi ${WeatherIcons.convertToWeatherIcon(props.data.icon)}`}></i>
			</div>
			<h3>{ props.data.summary ? props.data.summary : '- - - - -' }</h3>
			<div className='weather-data-common'>
				<h3>Temperature</h3>
				<div className={ hideCurrentTemp(props.data.temperature) }>
					<h3>Currently</h3>
					<h3>{ displayWholeValue(props.data.temperature) }</h3>
				</div>
				<h3>Min Max</h3>
				<h3>
					<span className='tempMin'>{ displayWholeValue(props.data.temperatureMin) }</span>
					<span className='tempMax'> { displayWholeValue(props.data.temperatureMax) }</span>
				</h3>
				<h3>Moon Phase</h3>
				<div className='conditions-container'>
					<i className={`wi ${WeatherIcons.convertToMoonPhase(props.data.moonPhase)}`}></i>
				</div>
			</div>
			<div className='weather-data-selected' >
				<h3>Humidity</h3>
				<h3>{ displayPercentage(props.data.humidity) }</h3>
				<h3>Precipitation</h3>
				<h3>{ displayPercentage(props.data.precipProbability) }</h3>
				<h3>Wind Speed</h3>
				<h3>{ displayWholeValue(props.data.windSpeed) }</h3>
			</div>
		</div>
	)
}