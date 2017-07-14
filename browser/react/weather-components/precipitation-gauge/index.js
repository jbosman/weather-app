'use strict'

import React from 'react';

import Gauge from '../../common-components/gauge';
import { percentage } from '../utility-functions';

require('../index.scss');
require('./index.scss');

export default function PrecipitationGauge(props){

	const { probability, type } = props;

	return (
		<div className='gauge-container'>
			<div>Precipitation</div>
			<div className='gauge-details'>
				<div>{ type }</div>
				<Gauge precentage={ percentage(probability) } />
			</div>
		</div>
	)
}