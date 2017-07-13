'use strict';

import React from 'react';

require('./index.scss');

export default function Forecast(props){
	return (
		<div>
			<div className='forecast-heading theme-background'>
				{ props.children.length > 8 ? "12-Hour Forecast": "Weekly Forecast" }
			</div>
			<div className='forecast'>
				{ props.children }
			</div>
		</div>
	)
}