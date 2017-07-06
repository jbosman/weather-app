'use strict';

import React, { Component } from 'react';
import axios from 'axios';

import getWeatherDataObj from './debug-weather-info';

// Components
import LoadingPage 	from '../loading-page';
import FeaturedDay 	from '../featured-components/featured-day';
import Forecast 	from '../forecast-components/forecast';
import ForecastHour from '../forecast-components/forecast-hour';
import ForecastDay 	from '../forecast-components/forecast-day';


require('./index.scss');

export default class App extends Component {

	constructor(){
		super();
		this.state = {
			coordinates: {},
			featured: {},
			current: {},
			hourly: [],
			forecast: [],
			background: 'loading'
		}
		this.handleDayClick = this.handleDayClick.bind(this);
		this.handleHourClick = this.handleHourClick.bind(this);
	}

	handleHourClick(hourID){
		if( this.state.hourly && this.state.hourly.data.length ){
			this.setState({ 
				featured: this.state.hourly.data[hourID], 
				background: this.state.hourly.data[hourID].icon 
			});
		}
	}

	handleDayClick(dayID){
		if( this.state.forecast && this.state.forecast.data.length  ){
			this.setState({ 
				featured: this.state.forecast.data[dayID], 
				background: this.state.forecast.data[dayID].icon 
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

	loadHourlyForecast(){
		const displayNumOfHours = 12;
		return this.state.hourly.data.map( (hour, i) => {
			if( i < displayNumOfHours)
				return <ForecastHour key={i} data={hour} hourNum={i} clickHandler={this.handleHourClick} />
		})
	}

	loadWeeklyForecast(){
		return this.state.forecast.data.map( (day, i) => {
			return <ForecastDay key={i} data={day} dayNum={i} clickHandler={this.handleDayClick} />
		})
	}

	componentDidMount(){
		//Acutal request for weather info
		// this.getLocation()
		// .then( position => {
		// 	return axios.get(`api/weather/${position.coords.latitude}/${position.coords.longitude}`)
		// })
		// .then( resp => {
		// 	const weatherInfo = resp.data;
		// 	console.log(JSON.stringify(resp.data))
		// 	weatherInfo.daily.data[0] = Object.assign( weatherInfo.currently, weatherInfo.daily.data[0] );
		// 	this.setState({
		// 		coordinates: { 
		// 			longitude: weatherInfo.longitude, 
		// 			latitude: weatherInfo.latitude 
		// 		},
		// 		featured: weatherInfo.daily.data[0],
		// 		forecast: weatherInfo.daily.data,
		// 		background: weatherInfo.daily.data[0].icon
		// 	})
		// })
		// .catch(console.error)

		// Stubbing this in right now for debugging

		const weatherInfo = getWeatherDataObj();

		this.setState({
			coordinates: { 
				longitude: weatherInfo.longitude, 
				latitude: weatherInfo.latitude 
			},
			featured: weatherInfo.currently,
			currently: weatherInfo.currently,
			hourly: weatherInfo.hourly,
			forecast: weatherInfo.daily,
			background: weatherInfo.currently.icon
		})
	}

	render(){
		if( !this.state.forecast.data )
			return <LoadingPage />;
		else {
			return (
				<div className={`app-component hero-background ${this.state.background}`}>
					<FeaturedDay featured={this.state.featured} />
					<Forecast>
						{this.loadHourlyForecast()}
					</Forecast>
					<Forecast>
						{this.loadWeeklyForecast()}
					</Forecast>
				</div>
			)
		}
	}
}
