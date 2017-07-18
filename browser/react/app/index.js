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
			readableLocation: '',
			featured: {},
			current: {},
			hourly: [],
			forecast: [],
			isFahrenheit: true,
			background: 'loading',
		}
		this.handleUserForecastClick = this.handleUserForecastClick.bind(this);
		this.handleTemperatureConverversionClick = this.handleTemperatureConversionClick.bind(this);
	}

	handleUserForecastClick(data){
			this.setState({ 
				featured: data, 
				background: data.icon 
			});
	}

	handleTemperatureConversionClick(value){
		this.setState({isFahrenheit: value})
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
							isFahrenheit={this.state.isFahrenheit}
							temperatureCoversionFunction={this.state.temperatureConversionFunction}
							clickHandler={this.handleUserForecastClick} 
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
		let latitude = '';
		let longitude = '';

		//Acutal request for weather info
		this.getLocation()
		.then( positionData => {
			latitude = positionData.coords.latitude;
			longitude = positionData.coords.longitude;
			return axios.get(`api/weather/${latitude}/${longitude}`)
		})
		.then( resp => {
			const weatherInfo = resp.data;

			weatherInfo.hourly.data.forEach( (hour) => { hour.isDayData = false; });
			weatherInfo.daily.data.forEach(  (day)  => { day.isDayData = true; });
			
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
		})
		.then( () => {
			return axios.get(`api/reverse-geolocation/${latitude}/${longitude}`)
		})
		.then( resp => {
			console.log('here', resp.data.results[1].formatted_address)
			this.setState({
				readableLocation: resp.data.results[1].formatted_address
			})
		})
		.catch(console.error)

		// The code below was used for debugging to save time when reloading the page

		// const weatherInfo = getWeatherDataObj();
		// weatherInfo.hourly.data.forEach( (hour) => { hour.isDayData = false; });
		// weatherInfo.daily.data.forEach(  (day)  => { day.isDayData = true; });

		// this.setState({
		// 	coordinates: { 
		// 		longitude: 	weatherInfo.longitude, 
		// 		latitude: 	weatherInfo.latitude 
		// 	},
		// 	featured: 	weatherInfo.currently,
		// 	currently: 	weatherInfo.currently,
		// 	hourly: 	weatherInfo.hourly,
		// 	forecast: 	weatherInfo.daily,
		// 	background: weatherInfo.currently.icon
		// })
	}

	render(){
		const { 
				hourly,
				forecast,
				background, 
				featured,
				readableLocation,
				isFahrenheit } = this.state;

		if( !forecast.data )
			return <LoadingPage />;
		else {
			return (
				<div className={`app-component hero-background ${ background }`}>
					<div className='app-border'>
						<FeaturedDay 
							featured={ featured } 
							location={ readableLocation }
							isFahrenheit = { isFahrenheit } 
						/>
						<Forecast heading={'12-Hour Forecast'} summary={ hourly.summary }>
							{ this.loadHourForecast() }
						</Forecast>
						<Forecast heading={ 'Weekly Forecast' } summary={ forecast.summary }>
							{ this.loadDayForecast() }
						</Forecast>
					</div>
				</div>
			)
		}
	}
}
