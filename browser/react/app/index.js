'use strict';

import React, { Component } from 'react';
import axios from 'axios';

import getWeatherDataObj from './debug-weather-info';

// Components
import LoadingPage 	from '../loading-page';
import FeaturedDay 	from '../featured-components/featured-day';
import Forecast 	from '../forecast-components/forecast';
import ForecastItem from '../forecast-components/forecast-item';


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
		this.handleUserClick = this.handleUserClick.bind(this);
	}

	handleUserClick( data){
		
			this.setState({ 
				featured: data, 
				background: data.icon 
			});
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

	loadForecast( data, numOfdataItemsToLoad ){
		return data.map( ( itemData, i ) => {
			if( i < numOfdataItemsToLoad ){
				return <ForecastItem 
							key={i} 
							data={itemData} 
							index={i} 
							clickHandler={this.handleUserClick} 
						/>
			}
		})
	}

	loadHourForecast( numOfHours = 12 ){
		const data = this.state.hourly.data;
		return this.loadForecast( data, numOfHours );
	}

	loadDayForecast( numOfDays = 8 ){
		const data = this.state.forecast.data;
		return this.loadForecast( data, numOfDays );
	}

	componentDidMount(){
		//Acutal request for weather info
		// this.getLocation()
		// .then( position => {
		// 	return axios.get(`api/weather/${position.coords.latitude}/${position.coords.longitude}`)
		// })
		// .then( resp => {
		// 	const weatherInfo = resp.data;
			
		// 	this.setState({
		// 		coordinates: { 
		// 			longitude: weatherInfo.longitude, 
		// 			latitude: weatherInfo.latitude 
		// 		},
		// 		featured: weatherInfo.currently,
		// 		currently: weatherInfo.currently,
		// 		hourly: weatherInfo.hourly,
		// 		forecast: weatherInfo.daily,
		// 		background: weatherInfo.currently.icon
		// 	})
		// })
		// .catch(console.error)

		// Stubbing this in right now for debugging

		const weatherInfo = getWeatherDataObj();
		weatherInfo.hourly.data.forEach( (hour) => { hour.isDayData = false; });
		weatherInfo.daily.data.forEach(  (day)  => { day.isDayData = true; })

		this.setState({
			coordinates: { 
				longitude: 	weatherInfo.longitude, 
				latitude: 	weatherInfo.latitude 
			},
			featured: 	weatherInfo.currently,
			currently: 	weatherInfo.currently,
			hourly: 	weatherInfo.hourly,
			forecast: 	weatherInfo.daily,
			background: weatherInfo.currently.icon
		})
	}

	render(){
		if( !this.state.forecast.data )
			return <LoadingPage />;
		else {
			return (
				<div className={`app-component hero-background ${this.state.background}`}>
					<div className='app-border'>
						<FeaturedDay featured={this.state.featured} />
						<Forecast>
							{ this.loadHourForecast() }
						</Forecast>
						<Forecast>
							{ this.loadDayForecast() }
						</Forecast>
					</div>
				</div>
			)
		}
	}
}
