'use strict';

import React from 'react';

import DateInfo 	from '../../common-components/date-info';
import FeaturedDayWeatherInfo 	from '../featured-day-weather-info';

require('./index.scss');

export default function FeaturedDay(props){
	return (
		<div className='selected-day'>
			<DateInfo timestamp={props.featured.time} />
			<FeaturedDayWeatherInfo data={props.featured} />
		</div>
	)

}