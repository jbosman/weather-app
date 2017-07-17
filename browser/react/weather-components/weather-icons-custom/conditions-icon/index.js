'use strict'

import React from 'react';

import { convertToWeatherIcon } from '../utility-functions';

require('./index.scss');

export default function ConditionsIcon(props){

	const { icon } = props;

	return (
		<div className='conditions-icon'>
			<i className={`wi ${ convertToWeatherIcon(icon)}` }></i>
		</div>
	)
}

