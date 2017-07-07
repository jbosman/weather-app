'use strict';

import React from 'react';


require('./index.scss');

import { getDayOfWeek, getDateString } from '../timestampConversion';

export default function DateInfo(props){
	return ( 
		<div>
			<h2>{ getDayOfWeek(props.timestamp) }</h2>
			<h2>{ getDateString(props.timestamp) }</h2>
		</div>
	)	
}