'use strict'

import React from 'react';
import { convertToMoonPhase } from '../utility-functions';

require('./index.scss');

export default function MoonPhase(props){
	const { phase } = props;
	return (
		<div className='moon-phase'>
			<i className={`wi ${convertToMoonPhase(phase)}`}></i>
		</div>
	)
}