'use strict';

import React from 'react';

import DateInfo 	from '../../common-components/date-info';
import FeaturedDayWeatherInfo 	from '../featured-day-weather-info';

require('./index.scss');

export default function FeaturedDay(props){
	const { featured } = props;
	const { time, 
			isDayData } = featured;

	return (
		<div className='selected-day'>
			<DateInfo timestamp={ time } isDayData={ isDayData } />
			<FeaturedDayWeatherInfo data={ featured } />
		</div>
	)

}