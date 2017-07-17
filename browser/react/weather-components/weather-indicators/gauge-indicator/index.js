'use strict';

import React from 'react';

import { percentage } from '../../utility-functions';
require('./index.scss');

export default function Gauge(props){
	const { 
		title,
		fillPercentage 
	} = props;
	
	const divStyle = {
		width: `${percentage(fillPercentage)}%`
	}

	return (
		<div className='gauge'>
			<div className='title'>{ title }</div>
			<div className='frame'>
				<div className='fill' style={ divStyle }></div>
			</div>
		</div>
	)
}
