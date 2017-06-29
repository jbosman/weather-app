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
			forecast: [],
			background: 'loading'
		}
		this.handleDayClick = this.handleDayClick.bind(this);
	}

	handleDayClick(dayID){
		if( this.state.forecast.length ){
			this.setState({ 
				selected: this.state.forecast[dayID], 
				background: this.state.forecast[dayID].icon 
			});
		}

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
		return this.state.forecast.map( (day, i) => {
			return <ForecastDay key={i} data={day} dayNum={i} clickHandler={this.handleDayClick} />
		})
	}

	componentDidMount(){
		this.getLocation()
		.then( position => {
			return axios.get(`api/weather/${position.coords.latitude}/${position.coords.longitude}`)
		})
		.then( resp => {
			const weatherInfo = resp.data;
			weatherInfo.daily.data[0] = Object.assign( weatherInfo.currently, weatherInfo.daily.data[0] );
			this.setState({
				coordinates: { 
					longitude: weatherInfo.longitude, 
					latitude: weatherInfo.latitude 
				},
				selected: weatherInfo.daily.data[0],
				forecast: weatherInfo.daily.data,
				background: weatherInfo.daily.data[0].icon
			})
		})
		.catch(console.error)
	}

	render(){
		return (
			<div className={`app-component hero-background ${this.state.background}`}>
				<SelectectedDay selected={this.state.selected} />
				<Forecast>
					{this.loadForecast()}
				</Forecast>
			</div>
		)
	}
}