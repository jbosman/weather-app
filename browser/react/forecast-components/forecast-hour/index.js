import React from 'react';

require('./index.scss');

// import HourInfo from '../../common-components/hour-info';
import ForecastHourWeatherInfo from '../forecast-hour-weather-info';

export default function ForecastHour(props){
	return (
		<div className='forecast-hour' onClick={ () => {
			props.clickHandler(props.hourNum)
		}}>
			<h3>{props.hourNum}</h3>
		</div>
	)
}

//<HourInfo timestamp={props.data.time} />
//<ForecastHourWeatherInfo data={props.data} />