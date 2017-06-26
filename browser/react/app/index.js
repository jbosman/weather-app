import React from 'react';

// Components
import SelectectedDay from '../selected-day';
import Forecast from '../forecast';

require('./index.scss');

export default function(){
	return (
		<div className='app-component'>
			<SelectectedDay></SelectectedDay>
			<Forecast>
				<h1>Day 1</h1>
				<h1>Day 2</h1>
				<h1>Day 3</h1>
				<h1>Day 4</h1>
				<h1>Day 5</h1>
			</Forecast>
		</div>
	)
}