'use strict';

import React, { Component } from 'react';
import axios from 'axios';

// Components
import SelectectedDay from '../selected-day';
import Forecast from '../forecast';

require('./index.scss');

export default class App extends Component {

	constructor(){
		super();
		this.state = {
			coordinates: {},
			selected: {},
			current: {},
			forecast: []
		}
	}

	handleDayClick(dayID){
		if( this.state.forcast.length )
			this.setState({ selected: this.state.forecast[dayID] });
	}

	getLocation(){

	  let coords = {};
  
	  const options = {
	    enableHighAccuracy: true,
	    timeout: 5000,
	    maximumAge: 0
	  };
	  

	  return new Promise( function(resolve, reject){
	  	window.navigator.geolocation.getCurrentPosition(resolve, reject, options);
	  })
	  
	}

	componentDidMount(){
		this.getLocation()
		.then( position => {
			return axios.get(`api/weather/${position.coords.latitude}/${position.coords.longitude}`)
		})
		.then( resp => {
			const weatherInfo = resp.data;
			this.setState({
				coordinates: { 
					longitude: weatherInfo.longitude, 
					latitude: weatherInfo.latitude 
				},
				selected: weatherInfo.currently,
				current: weatherInfo.currently,
				forecase: weatherInfo.daily
			})
		})
		.catch(console.error)
	}

	render(){
		return (
			<div className='app-component'>
				<SelectectedDay selected={this.state.selected} />
				<Forecast handleDayClick={this.handleDayClick} >
					<h1>Day 1</h1>
					<h1>Day 2</h1>
					<h1>Day 3</h1>
					<h1>Day 4</h1>
					<h1>Day 5</h1>
				</Forecast>
			</div>
		)
	}
}