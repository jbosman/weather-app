'use strict';

import React from 'react';

require('./index.scss');

const loadingGIF = require('./gifs/loading.gif');

export default function LoadingPage(){
	return ( 
		<div className={`loading-component`}>
			<img src={loadingGIF} alt='Loading Image'/>
		</div>
	)
}