'use strict';

import React from 'react';


require('./index.scss');

import { 	getHour, 
			getDayOfWeek, 
			getDateString } from '../timestampConversion';

export default function DateInfo(props){
	const { isHourOrDay, 
			timestamp } = props;

			console.log(isHourOrDay)

	return isHourOrDay === 'hours' ?
		(
			<div> 
				<h2>{ getHour(timestamp) }</h2>
			</div>
		)
		: 
		( 
			<div>
				<h2>{ getDayOfWeek(timestamp) }</h2>
				<h2>{ getDateString(timestamp) }</h2>
			</div>
		) 
}