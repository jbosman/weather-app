'use strict';

import React from 'react';

require('./index.scss');

export default function Forecast(props){
	return (
		<div className='forecast'>
			{ props.children }
		</div>
	)
}