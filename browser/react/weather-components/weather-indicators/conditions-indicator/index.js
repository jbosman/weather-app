'use strict';

import React from 'react';

import ConditionsIcon from '../../weather-icons-custom/conditions-icon';
require('./index.scss');

export default function Conditions(props){

	const {
		summary,
		icon
	} = props

	return (
		<div className='conditions-indicator'>
			<div className='summary'>{summary}</div>
			<ConditionsIcon icon={icon} />
		</div>
	)
}