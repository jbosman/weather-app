import React from 'react';

require('./index.scss');

import Conditions from '../../weather-components/conditions-indicator';
import PrecipitationGauge from '../../weather-components/precipitation-gauge';
import HumidityGauge from '../../weather-components/humidity-gauge';
import CloudCoverGauge from '../../weather-components/cloud-cover-gauge';

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
		cloudCover,
		pressure,
		uvIndex

	} = data;

	const precipType = !data.precipType ? 'none' : data.precipType;

	return (
		<div className='featured-day-weather-info'>
			<div className='featured-conditions'>
				<div className='summary'>{ summary }</div>
				<Conditions icon={ icon } />

			</div>
			<div className='featured-group-1'>
				<PrecipitationGauge type={ precipType } probability={precipProbability} />
				<HumidityGauge 		percent={humidity} />
				<CloudCoverGauge percent={cloudCover} />
		
				<div>Dew Point: { dewPoint }</div>
				<div>Wind Speed: { windSpeed }</div>
				<div>Wind Gusts: { windGust }</div>
				<div>Wind Bearing: { windBearing }</div>
				<div>Atmospheric Pressure: { pressure }</div>
				<div>UV Index: { uvIndex }</div>
			</div>
		</div>
	)
}