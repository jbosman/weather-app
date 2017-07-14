'use strict'

import React from 'react';

import Gauge from '../../common-components/gauge';
import { percentage } from '../utility-functions';

require('./index.scss');

export default function PrecipitationGauge(props){

	const { probability, type } = props;

	return (
		<div className='precipitation-gauge'>
			<div>Precipitation</div>
			<div className='precipitation-details'>
				<div>{ type }</div>
				<Gauge precentage={ percentage(probability) } />
			</div>
		</div>
	)
}