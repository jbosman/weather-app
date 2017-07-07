import React from 'react';

require('./index.scss');

import { getHour } from '../timestampConversion';

export default function HourInfo(props){
	return (
		<h3>{ getHour(props.timestamp) }</h3>
	);
}