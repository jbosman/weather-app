import React from 'react';

require('./index.scss');

import Conditions from '../../weather-components/conditions-indicator';
import Gauge from '../../weather-components/gauge';
import WindIndicator from '../../weather-components/wind-indicator';

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
			<div className='featured-group featured-conditions'>
				<div className='summary'>{ summary }</div>
				<Conditions icon={ icon } />

			</div>
			<div className='featured-group'>
				<Gauge title={ `Precipication: ${precipType}` } fillPercentage={precipProbability} />
				<Gauge title={'Humidity'} fillPercentage={humidity} />
				<Gauge title={'Cloud Cover'} fillPercentage={cloudCover} />
			</div>
			<div className='featured-group'>
				<WindIndicator speed={windSpeed} gust={windGust} bearing={windBearing} />
			</div>
		</div>
	)
}

// <div>Dew Point: { dewPoint }</div>
// <div>Atmospheric Pressure: { pressure }</div>
// <div>UV Index: { uvIndex }</div>