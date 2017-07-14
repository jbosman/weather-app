'use strict'

import React from 'react';

require('./index.scss');

import FaMapMarker from 'react-icons/lib/fa/map-marker';

export default function Location(props){
	const { location } = props;

	return (
		<div className='location'>
			<FaMapMarker className='map-marker'/>
			<span className='location-text'>{ location }</span>
		</div>
	)
}