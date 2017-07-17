'use strict'

import React from 'react';
import { percentage } from '../utility-functions';

require('./index.scss');

export default function Humidity(props){
	const { humidity } = props;
	return (
		<div className='humidity'>
			<div className='humidity-container'>
				<span className='humidity'>{ percentage(humidity) }</span>
				<i className='wi wi-humidity'></i>
			</div>
		</div>
	)
}