import React from 'react';

import { convertToWeatherIcon } from '../../weather-components/weather-icons';

require('./index.scss');

export default function Conditions(props){
	return (
		<div className='conditions'>
			<i className={`wi ${ convertToWeatherIcon(props.icon)}` }></i>
		</div>
	)
}