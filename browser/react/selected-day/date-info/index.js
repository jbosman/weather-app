'use strict';

import React from 'react';
import Moment from 'moment';

require('./index.scss');

function timestampToDate(timestamp){
	return formatDateString(new Date(timestamp * 1000));
}

function formatDateString(date){
	return Moment(date).format('MMMM Do YYYY');
}

export default function DateInfo(props){
	 
	const dateInfo = props.timestamp ?
		timestampToDate(props.timestamp)
		: '---- -- ----';
	
	return ( 
		<div>
			<h2>{dateInfo}</h2>
		</div>
	)
	
		
}