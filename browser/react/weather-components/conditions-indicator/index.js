import React from 'react';

import { convertToWeatherIcon } from '../../weather-components/weather-icons';

require('./index.scss');

export default function ConditionsIndicator(props){
	return (
		<div className='conditions-indicator'>
			<i className={`wi ${ convertToWeatherIcon(props.icon)}` }></i>
		</div>
	)
}