'use strict';

import React from 'react';
import Moment from 'moment';

require('./index.scss');

function timestampToDate(timestamp){
	return new Date(timestamp * 1000);
}

function formatDateString(date){
	return Moment(date).format('MMMM Do');
}

function dayOfWeek(date){
	return Moment(date).day();
}

function isSameDay(date){
	const today = Moment(new Date());
	const checkDate = Moment(date);
	return (
		( today.date()  === checkDate.date()  ) &&  
		( today.month() === checkDate.month() ) && 
		( today.year() === checkDate.year() )
	); 
}

function getDayOfWeek(timestamp){
	const daysOfWeek = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
	const date = timestampToDate(timestamp);
	const dayOfWeekNum = dayOfWeek(date);
	const day = isSameDay(date) ? 'Today' : daysOfWeek[ dayOfWeekNum ];
	return timestamp ? day : '--------';
}

function getDateString(timestamp){
	const date = timestampToDate(timestamp);
	return formatDateString( date );
}

function displayDayOfWeek(timestamp){
	return timestamp ? getDayOfWeek(timestamp) : '--------';
}

function displayDateString(timestamp){
	return timestamp ? getDateString(timestamp) : '---- -- ----';
}

export default function DateInfo(props){
	return ( 
		<div>
			<h2>{ getDayOfWeek(props.timestamp) }</h2>
			<h2>{ getDateString(props.timestamp) }</h2>
		</div>
	)	
}