'use strict';

import React from 'react';

import DateInfo 	from '../../common-components/date-info';
import Location		from '../location';
import FeaturedDayWeatherInfo 	from '../featured-day-weather-info';

require('./index.scss');

export default function FeaturedDay(props){
	const { 
		featured, 
		location, 
		isFahrenheit } = props;

	const { 
		time, 
		isDayData } = featured;

	return (
		<div className='featured-day theme-background'>
			<DateInfo timestamp={ time } isDayData={ isDayData } />
			<Location location={ location } />
			<FeaturedDayWeatherInfo data={ featured } isFahrenheit={isFahrenheit} />
		</div>
	)

}