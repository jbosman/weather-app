'use strict';

import React, { Component } from 'react';
import axios from 'axios';

// Components
import SelectectedDay from '../selected-day';
import Forecast from '../forecast';
import ForecastDay from '../forecast-day';

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

	loadForecast(){
		console.log('forecast', this.state.forecast)
		return this.state.forecast.map( (day, i) => {
			return <ForecastDay key={i} data={day} />
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
				forecast: weatherInfo.daily.data
			})
		})
		.catch(console.error)
	}

	render(){
		return (
			<div className='app-component'>
				<SelectectedDay selected={this.state.selected} />
				<Forecast handleDayClick={this.handleDayClick} >
					{this.loadForecast()}
				</Forecast>
			</div>
		)
	}
}