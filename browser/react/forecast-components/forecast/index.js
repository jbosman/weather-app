'use strict';

import React from 'react';

require('./index.scss');

export default function Forecast(props){
	const {
		heading,
		summary,
		children
	} = props;

	return (
		<div className='forecast-container'>
			<div className='forecast-heading-container theme-background'>
				<div className='forecast-heading'>{ heading }</div>
				<div className='forecast-summary'>{ summary }</div>
			</div>
			<div className='forecast'>
				{ children }
			</div>
		</div>
	)
}