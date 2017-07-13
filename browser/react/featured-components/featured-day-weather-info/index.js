import React from 'react';

require('./index.scss');

import Conditions from '../../weather-components/conditions-indicator';

export default function FeaturedDayWeatherInfo(props){
	const {
		data
	} = props;

	const {
		summary,
		icon,

		precipProbability,
		dewPoint,
		humidity,
		windSpeed,
		windGust,
		windBearing,
		visibility,
		cloudCover

	} = data;

	const precipType = !data.precipType ? 'none' : data.precipType;

	return (
		<div className='featured-day-weather-info'>
			<div className='featured-conditions'>
				<div className='summary'>{ summary }</div>
				<Conditions icon={ icon } />
			</div>
			<div className='text-conditions'>
				<div>Probability: { precipProbability }%</div>
				<div>Type: { precipType }</div>
				<div>Dew Point: { dewPoint }</div>
				<div>Humidty: { humidity }%</div>
				<div>Wind Speed: { windSpeed }</div>
				<div>Wind Gusts: { windGust }</div>
				<div>Wind Bearing: { windBearing }</div>
			</div>
		</div>
	)
}