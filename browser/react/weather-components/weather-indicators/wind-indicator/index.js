'use strict'

import React from 'react';

require('../../weather-icons/scss/weather-icons.min.scss');
require('../../weather-icons/scss/weather-icons-wind.min.scss');
require('./index.scss');

function rotateCompassNeedle(heading){
	return {
		transform: 'rotate('+ heading + 'deg)'
	}
}

export default function WindIndicator(props){

	const {
		speed,
		gust,
		bearing
	} = props;

	const iStyle = {
		transform: `rotate(${bearing}deg)`
	}

	return (
		<div className='wind-indicator'>
			<div>Wind (mph)</div>
			<div className='wind-speed-details'>
				<div className='wind-container'>
					<div className='wind-speed-label'>Speed</div>
					<div>{ speed }</div>
				</div>
				<div className='wind-container'>
					<div className='wind-gust-speed-label'>Gusts</div>
					<div>{ gust }</div>
				</div>
			</div>
			<div className='compass-label'>Bearing</div>
			<i className='wi wi-wind towards-0-deg compass-needle-container'>
				<i style={ iStyle } className='wi wi-wind towards-0-deg compass-needle'></i>
				<div className='cardinal-direction north'>N</div>
				<div className='cardinal-direction north-east'>NE</div>
				<div className='cardinal-direction east'>E</div>
				<div className='cardinal-direction south-east'>SE</div>
				<div className='cardinal-direction south'>S</div>
				<div className='cardinal-direction south-west'>SW</div>
				<div className='cardinal-direction west'>W</div>
				<div className='cardinal-direction north-west'>NW</div>
			</i>
		</div>
	)
}