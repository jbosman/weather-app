import React from 'react';
import { percentage } from '../utility-functions';

require('./index.scss');

export default function PrecipitationProbilityIndicator(props){
	const { probability } = props;
	return (
		<div className='precipitation-probability'>
			<i className='wi wi-umbrella'>
				<div className='probability'> { percentage(probability) } </div>
			</i>
		</div>
	)
}