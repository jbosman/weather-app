'use strict'

import React from 'react';

require('../../weather-icons/scss/weather-icons.min.scss');
require('./index.scss');

// Converts from the Dark Sky Icon Name to the Weather Icon
// Dark Sky API Icon Names - https://darksky.net/dev/docs/response (scroll to icon)
// Weather Icons - https://erikflowers.github.io/weather-icons/
function convertIcon(darkSkyIconName){
	const converter = {
		'clear-day': 			'wi-day-sunny', 
		'clear-night': 			'wi-night-clear', 
		'rain': 				'wi-day-rain',
		'snow': 				'wi-day-snow', 
		'sleet': 				'wi-day-sleet', 
		'wind': 				'wi-day-windy', 
		'fog': 					'wi-day-fog', 
		'cloudy': 				'wi-cloudy',
		'partly-cloudy-day': 	'wi-day-cloudy',
		'partly-cloudy-night': 	'wi-night-alt-cloudy' 
	}

	return converter[darkSkyIconName];
}

export default function WeatherInfo(props){
	return (
		<div className='weather-info'>
			<div className='conditions-container'>
				<i className={`wi ${convertIcon(props.data.icon)}`}></i>
				<div className='vert' />
				<div className='hor' />
			</div>
			<h3>{ props.data.summary ? props.data.summary : '- - - - -' }</h3>
			<h3>
				<span className='tempLabel'>Temperature: </span>
				<span className='tempValue'>{props.data.temperature}</span>
			</h3>
			<h3>
				<span className='tempLabel'>Humidity: </span>
				<span className='tempValue'>{props.data.humidity}</span>
			</h3>
			<h3>
				<span className='tempLabel'>Wind Speed: </span>
				<span className='tempValue'>{props.data.windSpeed}</span>
			</h3>
		</div>
	)
}

			
//<img src='conditions.png' className={`mostly-clear-day2 ${props.data.icon}`}   alt='Selected Date Weather Image' />