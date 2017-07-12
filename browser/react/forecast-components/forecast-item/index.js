'use strict';

import React from 'react';

import DateInfo from '../../common-components/date-info';
import ForecastWeatherInfo from '../forecast-weather-info';

require('./index.scss');

export default function ForecastItem(props){
	const { index,
			data } = props;

	return (
		<div className='forecast-item' onClick={ () => { 
			props.clickHandler( index, data.isHourOrDay )
		}}>
			<DateInfo timestamp={data.time} isHourOrDay={data.isHourOrDay} />
			<ForecastWeatherInfo data={data} />
		</div>
	)
}
