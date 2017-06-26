import React from 'react';

// Components
import SelectectedDay from '../selected-day';

require('./index.scss');

export default function(){
	return (
		<div className='app-component'>
			<SelectectedDay></SelectectedDay>
		</div>
	)
}