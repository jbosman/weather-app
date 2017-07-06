'use strict';

import React, { Component } from 'react';
import axios from 'axios';

// Components
import LoadingPage 	from '../loading-page';
import FeaturedDay 	from '../featured-components/featured-day';
import Forecast 	from '../forecast-components/forecast';
import ForecastDay 	from '../forecast-components/forecast-day';

require('./index.scss');

export default class App extends Component {

	constructor(){
		super();
		this.state = {
			coordinates: {},
			featured: {},
			current: {},
			forecast: [],
			background: 'loading'
		}
		this.handleDayClick = this.handleDayClick.bind(this);
	}

	handleDayClick(dayID){
		if( this.state.forecast.length ){
			this.setState({ 
				featured: this.state.forecast[dayID], 
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
		// Acutal request for weather info
		// this.getLocation()
		// .then( position => {
		// 	return axios.get(`api/weather/${position.coords.latitude}/${position.coords.longitude}`)
		// })
		// .then( resp => {
		// 	const weatherInfo = resp.data;
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
		const weatherInfo = {"latitude":40.732775,"longitude":-73.9778465,"timezone":"America/New_York","offset":-4,"currently":{"time":1499368024,"summary":"Mostly Cloudy","icon":"partly-cloudy-day","nearestStormDistance":11,"nearestStormBearing":174,"precipIntensity":0,"precipProbability":0,"temperature":79.72,"apparentTemperature":79.75,"dewPoint":59.42,"humidity":0.5,"windSpeed":8.89,"windGust":14.24,"windBearing":150,"visibility":10,"cloudCover":0.79,"pressure":1018.37,"ozone":304.48,"uvIndex":4},"daily":{"summary":"Light rain today through Wednesday, with temperatures rising to 86°F on Monday.","icon":"rain","data":[{"time":1499313600,"summary":"Light rain in the morning and overnight.","icon":"rain","sunriseTime":1499333547,"sunsetTime":1499387470,"moonPhase":0.42,"precipIntensity":0.0016,"precipIntensityMax":0.0089,"precipIntensityMaxTime":1499349600,"precipProbability":0.31,"precipType":"rain","temperatureMin":68.59,"temperatureMinTime":1499328000,"temperatureMax":79.72,"temperatureMaxTime":1499367600,"apparentTemperatureMin":69.2,"apparentTemperatureMinTime":1499328000,"apparentTemperatureMax":79.73,"apparentTemperatureMaxTime":1499367600,"dewPoint":62.81,"humidity":0.71,"windSpeed":5.9,"windGust":14.25,"windGustTime":1499367600,"windBearing":136,"visibility":10,"cloudCover":0.82,"pressure":1019.07,"ozone":308.14,"uvIndex":7,"uvIndexTime":1499360400},{"time":1499400000,"summary":"Rain until afternoon.","icon":"rain","sunriseTime":1499419984,"sunsetTime":1499473851,"moonPhase":0.45,"precipIntensity":0.0286,"precipIntensityMax":0.1313,"precipIntensityMaxTime":1499421600,"precipProbability":0.86,"precipType":"rain","temperatureMin":68.85,"temperatureMinTime":1499403600,"temperatureMax":81.28,"temperatureMaxTime":1499457600,"apparentTemperatureMin":69.81,"apparentTemperatureMinTime":1499400000,"apparentTemperatureMax":84.09,"apparentTemperatureMaxTime":1499457600,"dewPoint":67.94,"humidity":0.84,"windSpeed":4.04,"windGust":16.12,"windGustTime":1499414400,"windBearing":64,"visibility":10,"cloudCover":0.72,"pressure":1008.51,"ozone":309.43,"uvIndex":6,"uvIndexTime":1499446800},{"time":1499486400,"summary":"Light rain in the morning.","icon":"rain","sunriseTime":1499506423,"sunsetTime":1499560230,"moonPhase":0.48,"precipIntensity":0.0024,"precipIntensityMax":0.0113,"precipIntensityMaxTime":1499515200,"precipProbability":0.29,"precipType":"rain","temperatureMin":69.76,"temperatureMinTime":1499504400,"temperatureMax":85.45,"temperatureMaxTime":1499544000,"apparentTemperatureMin":70.81,"apparentTemperatureMinTime":1499504400,"apparentTemperatureMax":86.12,"apparentTemperatureMaxTime":1499544000,"dewPoint":64.97,"humidity":0.69,"windSpeed":8.14,"windGust":20.68,"windGustTime":1499493600,"windBearing":262,"visibility":10,"cloudCover":0.17,"pressure":1006.8,"ozone":318.21,"uvIndex":10,"uvIndexTime":1499533200},{"time":1499572800,"summary":"Clear throughout the day.","icon":"clear-day","sunriseTime":1499592863,"sunsetTime":1499646608,"moonPhase":0.52,"precipIntensity":0,"precipIntensityMax":0,"precipProbability":0,"temperatureMin":66.98,"temperatureMinTime":1499590800,"temperatureMax":81.37,"temperatureMaxTime":1499634000,"apparentTemperatureMin":66.98,"apparentTemperatureMinTime":1499590800,"apparentTemperatureMax":81.37,"apparentTemperatureMaxTime":1499634000,"dewPoint":54.35,"humidity":0.51,"windSpeed":4.77,"windGust":20.76,"windGustTime":1499576400,"windBearing":270,"cloudCover":0.02,"pressure":1015.12,"ozone":342.96,"uvIndex":10,"uvIndexTime":1499619600},{"time":1499659200,"summary":"Mostly cloudy starting in the afternoon.","icon":"partly-cloudy-day","sunriseTime":1499679304,"sunsetTime":1499732983,"moonPhase":0.54,"precipIntensity":0,"precipIntensityMax":0,"precipProbability":0,"temperatureMin":66.3,"temperatureMinTime":1499673600,"temperatureMax":86.1,"temperatureMaxTime":1499716800,"apparentTemperatureMin":66.3,"apparentTemperatureMinTime":1499673600,"apparentTemperatureMax":86.1,"apparentTemperatureMaxTime":1499716800,"dewPoint":57.76,"humidity":0.54,"windSpeed":6.4,"windGust":25.09,"windGustTime":1499738400,"windBearing":233,"cloudCover":0.26,"pressure":1017.34,"ozone":330.66,"uvIndex":9,"uvIndexTime":1499702400},{"time":1499745600,"summary":"Light rain starting in the afternoon.","icon":"rain","sunriseTime":1499765746,"sunsetTime":1499819356,"moonPhase":0.58,"precipIntensity":0.0058,"precipIntensityMax":0.0384,"precipIntensityMaxTime":1499806800,"precipProbability":0.28,"precipType":"rain","temperatureMin":68.65,"temperatureMinTime":1499760000,"temperatureMax":86.1,"temperatureMaxTime":1499796000,"apparentTemperatureMin":68.94,"apparentTemperatureMinTime":1499760000,"apparentTemperatureMax":89.19,"apparentTemperatureMaxTime":1499796000,"dewPoint":65.86,"humidity":0.72,"windSpeed":4.7,"windGust":23.7,"windGustTime":1499745600,"windBearing":247,"cloudCover":0.52,"pressure":1016.52,"ozone":313.53,"uvIndex":7,"uvIndexTime":1499792400},{"time":1499832000,"summary":"Light rain until afternoon.","icon":"rain","sunriseTime":1499852190,"sunsetTime":1499905728,"moonPhase":0.61,"precipIntensity":0.0062,"precipIntensityMax":0.0232,"precipIntensityMaxTime":1499871600,"precipProbability":0.4,"precipType":"rain","temperatureMin":70.05,"temperatureMinTime":1499850000,"temperatureMax":84.14,"temperatureMaxTime":1499889600,"apparentTemperatureMin":71.09,"apparentTemperatureMinTime":1499850000,"apparentTemperatureMax":86.03,"apparentTemperatureMaxTime":1499889600,"dewPoint":66.89,"humidity":0.76,"windSpeed":2.68,"windGust":21.86,"windGustTime":1499839200,"windBearing":63,"cloudCover":0.25,"pressure":1016.94,"ozone":325.97,"uvIndex":10,"uvIndexTime":1499878800},{"time":1499918400,"summary":"Partly cloudy starting in the afternoon, continuing until evening.","icon":"partly-cloudy-day","sunriseTime":1499938634,"sunsetTime":1499992097,"moonPhase":0.64,"precipIntensity":0,"precipIntensityMax":0,"precipProbability":0,"temperatureMin":68.12,"temperatureMinTime":1499936400,"temperatureMax":83.2,"temperatureMaxTime":1499968800,"apparentTemperatureMin":68.29,"apparentTemperatureMinTime":1499936400,"apparentTemperatureMax":83.2,"apparentTemperatureMaxTime":1499968800,"dewPoint":59.21,"humidity":0.61,"windSpeed":7.86,"windGust":15.42,"windGustTime":1499983200,"windBearing":94,"cloudCover":0.27,"pressure":1021.2,"ozone":318.06,"uvIndex":9,"uvIndexTime":1499965200}]}}
		weatherInfo.daily.data[0] = Object.assign( weatherInfo.currently, weatherInfo.daily.data[0] );
			this.setState({
				coordinates: { 
					longitude: weatherInfo.longitude, 
					latitude: weatherInfo.latitude 
				},
				featured: weatherInfo.daily.data[0],
				forecast: weatherInfo.daily.data,
				background: weatherInfo.daily.data[0].icon
			})
	}

	render(){
		if( !this.state.forecast.length )
			return <LoadingPage />;
		else {
			return (
				<div className={`app-component hero-background ${this.state.background}`}>
					<FeaturedDay featured={this.state.featured} />
					<Forecast>
						{this.loadForecast()}
					</Forecast>
				</div>
			)
		}
	}
}