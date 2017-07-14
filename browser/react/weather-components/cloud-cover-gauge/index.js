'use strict'

import React from 'react';

import Gauge from '../../common-components/gauge';
import { percentage } from '../utility-functions';

require('../index.scss');
require('./index.scss');

export default function CloudCover(props){

	const { percent, type } = props;

	return (
		<div className='gauge-container'>
			<div>Cloud Cover</div>
			<div className='gauge-details'>
				<Gauge precentage={ percentage(percent) } />
			</div>
		</div>
	)
}