import React from 'react';

require('./index.scss');

import Conditions from '../../weather-components/weather-indicators/conditions-indicator';
import Gauge from '../../weather-components/weather-indicators/gauge-indicator';
import WindIndicator from '../../weather-components/weather-indicators/wind-indicator';
import TemperatureIndicator from '../../weather-components/weather-indicators/temperature-indicator';

export default function FeaturedDayWeatherInfo(props){
	const {
		data,
		isFahrenheit
	} = props;

	const {
		summary,
		icon,
		temperature,
		temperatureMax,
		temperatureMin,
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

	console.log('featured:', temperature )

	const precipType = !data.precipType ? 'none' : data.precipType;

	return (
		<div className='featured-day-weather-info'>
			<div className='featured-group' >
				<Conditions summary={summary} icon={icon} />
			</div>
			<div className='featured-group'>
				<TemperatureIndicator 
					temperature= 	{ temperature }
					high = 			{ temperatureMax }
					low  = 			{ temperatureMin }
					isFahrenheit = 	{isFahrenheit}
				/>
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