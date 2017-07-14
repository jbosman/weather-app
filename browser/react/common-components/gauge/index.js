'use strict'

import React from 'react';

require('./index.scss');

export default function Gauge(props){
	const { precentage } = props;
	
	const divStyle = {
		width: `${precentage}%`
	}

	return (
		<div className='gauge'>
			<div className='frame'>
				<div className='fill' style={ divStyle }></div>
			</div>
		</div>
	)

}