// * - indicates matching property

// Hourly properties
	//* "time": 1499367600,
	//* "summary": "Clear",
	//* "icon": "clear-day",
	//* "precipIntensity": 0.002,
	//* "precipProbability": 0.01,
	//* "precipType": "rain",
	//  "temperature": 64.32,
	//  "apparentTemperature": 64.32,
	//* "dewPoint": 53.44,
	//* "humidity": 0.68,
	//* "windSpeed": 7.26,
	//* "windGust": 9.05,
	//* "windBearing": 240,
	//* "visibility": 10,
	//* "cloudCover": 0.16,
	//* "pressure": 1018.04,
	//* "ozone": 290.59,
	//* "uvIndex": 9

// Day Properties
	//* "time": 1499497200,
	//* "summary": "Foggy in the morning.",
	//* "icon": "fog",
	//  "sunriseTime": 1499518582,
	//  "sunsetTime": 1499571327,
	//  "moonPhase": 0.48,
	//* "precipIntensity": 0.0005,
	//  "precipIntensityMax": 0.0014,
	//  "precipIntensityMaxTime": 1499580000,
	//* "precipProbability": 0.02,
	//* "precipType": "rain",
	//  "temperatureMin": 49.99,
	//  "temperatureMinTime": 1499515200,
	//  "temperatureMax": 64.36,
	//  "temperatureMaxTime": 1499551200,
	//  "apparentTemperatureMin": 47.82,
	//  "apparentTemperatureMinTime": 1499515200,
	//  "apparentTemperatureMax": 64.36,
	//  "apparentTemperatureMaxTime": 1499551200,
	//* "dewPoint": 52.84,
	//* "humidity": 0.87,
	//* "windSpeed": 7.14,
	//* "windGust": 12.45,
	//  "windGustTime": 1499554800,
	//* "windBearing": 241,
	//* "visibility": 10,
	//* "cloudCover": 0.36,
	//* "pressure": 1013.57,
	//* "ozone": 291.62,
	//* "uvIndex": 10,
	//  "uvIndexTime": 1499544000



export default function getWeatherDataObj(){
	return {
			"latitude": 37.8267,
			"longitude": -122.4233,
			"timezone": "America/Los_Angeles",
			"offset": -7,
			"currently": {
				"time": 1499369169,
				"summary": "Clear",
				"icon": "clear-day",
				"nearestStormDistance": 27,
				"nearestStormBearing": 232,
				"precipIntensity": 0,
				"precipProbability": 0,
				"temperature": 64.32,
				"apparentTemperature": 64.32,
				"dewPoint": 52.69,
				"humidity": 0.66,
				"windSpeed": 7.57,
				"windGust": 9.63,
				"windBearing": 245,
				"visibility": 10,
				"cloudCover": 0.16,
				"pressure": 1017.87,
				"ozone": 290.69,
				"uvIndex": 10
				},
			"hourly": {
				"summary": "Partly cloudy starting tonight.",
				"icon": "partly-cloudy-day",
				"data": [
					{
					"time": 1499367600,
					"summary": "Clear",
					"icon": "clear-day",
					"precipIntensity": 0.002,
					"precipProbability": 0.01,
					"precipType": "rain",
					"temperature": 64.32,
					"apparentTemperature": 64.32,
					"dewPoint": 53.44,
					"humidity": 0.68,
					"windSpeed": 7.26,
					"windGust": 9.05,
					"windBearing": 240,
					"visibility": 10,
					"cloudCover": 0.16,
					"pressure": 1018.04,
					"ozone": 290.59,
					"uvIndex": 9
					},
					{
					"time": 1499371200,
					"summary": "Clear",
					"icon": "clear-day",
					"precipIntensity": 0,
					"precipProbability": 0,
					"temperature": 66.43,
					"apparentTemperature": 66.43,
					"dewPoint": 53.7,
					"humidity": 0.64,
					"windSpeed": 8.05,
					"windGust": 10.37,
					"windBearing": 251,
					"visibility": 10,
					"cloudCover": 0.16,
					"pressure": 1017.66,
					"ozone": 290.81,
					"uvIndex": 11
					},
					{
					"time": 1499374800,
					"summary": "Clear",
					"icon": "clear-day",
					"precipIntensity": 0,
					"precipProbability": 0,
					"temperature": 67.93,
					"apparentTemperature": 67.93,
					"dewPoint": 53.84,
					"humidity": 0.61,
					"windSpeed": 7.68,
					"windGust": 11.82,
					"windBearing": 251,
					"visibility": 10,
					"cloudCover": 0.18,
					"pressure": 1017.25,
					"ozone": 291.09,
					"uvIndex": 10
					},
					{
					"time": 1499378400,
					"summary": "Clear",
					"icon": "clear-day",
					"precipIntensity": 0,
					"precipProbability": 0,
					"temperature": 68.33,
					"apparentTemperature": 68.33,
					"dewPoint": 54.06,
					"humidity": 0.6,
					"windSpeed": 8.59,
					"windGust": 12.23,
					"windBearing": 253,
					"visibility": 10,
					"cloudCover": 0.15,
					"pressure": 1016.95,
					"ozone": 291.43,
					"uvIndex": 8
					},
					{
					"time": 1499382000,
					"summary": "Clear",
					"icon": "clear-day",
					"precipIntensity": 0,
					"precipProbability": 0,
					"temperature": 68.49,
					"apparentTemperature": 68.49,
					"dewPoint": 53.92,
					"humidity": 0.6,
					"windSpeed": 8.7,
					"windGust": 13.39,
					"windBearing": 252,
					"visibility": 10,
					"cloudCover": 0.14,
					"pressure": 1016.6,
					"ozone": 291.7,
					"uvIndex": 5
					},
					{
					"time": 1499385600,
					"summary": "Clear",
					"icon": "clear-day",
					"precipIntensity": 0,
					"precipProbability": 0,
					"temperature": 67.87,
					"apparentTemperature": 67.87,
					"dewPoint": 53.68,
					"humidity": 0.6,
					"windSpeed": 8.6,
					"windGust": 13.85,
					"windBearing": 258,
					"visibility": 10,
					"cloudCover": 0.13,
					"pressure": 1016.5,
					"ozone": 292.01,
					"uvIndex": 3
					},
					{
					"time": 1499389200,
					"summary": "Clear",
					"icon": "clear-day",
					"precipIntensity": 0,
					"precipProbability": 0,
					"temperature": 66.22,
					"apparentTemperature": 66.22,
					"dewPoint": 53.3,
					"humidity": 0.63,
					"windSpeed": 8.31,
					"windGust": 13.92,
					"windBearing": 257,
					"visibility": 10,
					"cloudCover": 0.13,
					"pressure": 1016.23,
					"ozone": 292.27,
					"uvIndex": 1
					},
					{
					"time": 1499392800,
					"summary": "Clear",
					"icon": "clear-day",
					"precipIntensity": 0,
					"precipProbability": 0,
					"temperature": 63.77,
					"apparentTemperature": 63.77,
					"dewPoint": 52.91,
					"humidity": 0.68,
					"windSpeed": 7.9,
					"windGust": 13.85,
					"windBearing": 253,
					"visibility": 10,
					"cloudCover": 0.12,
					"pressure": 1015.93,
					"ozone": 292.5,
					"uvIndex": 1
					},
					{
					"time": 1499396400,
					"summary": "Clear",
					"icon": "clear-day",
					"precipIntensity": 0.002,
					"precipProbability": 0.01,
					"precipType": "rain",
					"temperature": 61.49,
					"apparentTemperature": 61.49,
					"dewPoint": 52.35,
					"humidity": 0.72,
					"windSpeed": 7.06,
					"windGust": 12.72,
					"windBearing": 249,
					"visibility": 10,
					"cloudCover": 0.13,
					"pressure": 1015.88,
					"ozone": 292.61,
					"uvIndex": 0
					},
					{
					"time": 1499400000,
					"summary": "Clear",
					"icon": "clear-night",
					"precipIntensity": 0,
					"precipProbability": 0,
					"temperature": 59.01,
					"apparentTemperature": 59.01,
					"dewPoint": 52.38,
					"humidity": 0.79,
					"windSpeed": 7.32,
					"windGust": 11.64,
					"windBearing": 239,
					"visibility": 10,
					"cloudCover": 0.13,
					"pressure": 1016.19,
					"ozone": 292.5,
					"uvIndex": 0
					},
					{
					"time": 1499403600,
					"summary": "Clear",
					"icon": "clear-night",
					"precipIntensity": 0.0017,
					"precipProbability": 0.01,
					"precipType": "rain",
					"temperature": 57.19,
					"apparentTemperature": 57.19,
					"dewPoint": 52.25,
					"humidity": 0.84,
					"windSpeed": 6.82,
					"windGust": 10.34,
					"windBearing": 251,
					"visibility": 10,
					"cloudCover": 0.14,
					"pressure": 1016.77,
					"ozone": 292.23,
					"uvIndex": 0
					},
					{
					"time": 1499407200,
					"summary": "Clear",
					"icon": "clear-night",
					"precipIntensity": 0,
					"precipProbability": 0,
					"temperature": 55.81,
					"apparentTemperature": 55.81,
					"dewPoint": 52.08,
					"humidity": 0.87,
					"windSpeed": 6.88,
					"windGust": 10.14,
					"windBearing": 244,
					"visibility": 10,
					"cloudCover": 0.16,
					"pressure": 1017.14,
					"ozone": 292.03,
					"uvIndex": 0
					},
					{
					"time": 1499410800,
					"summary": "Clear",
					"icon": "clear-night",
					"precipIntensity": 0,
					"precipProbability": 0,
					"temperature": 54.65,
					"apparentTemperature": 54.65,
					"dewPoint": 52.67,
					"humidity": 0.93,
					"windSpeed": 6.36,
					"windGust": 9.74,
					"windBearing": 259,
					"visibility": 10,
					"cloudCover": 0.2,
					"pressure": 1017.46,
					"ozone": 291.91,
					"uvIndex": 0
					},
					{
					"time": 1499414400,
					"summary": "Partly Cloudy",
					"icon": "partly-cloudy-night",
					"precipIntensity": 0,
					"precipProbability": 0,
					"temperature": 53.96,
					"apparentTemperature": 53.96,
					"dewPoint": 52.54,
					"humidity": 0.95,
					"windSpeed": 6.58,
					"windGust": 9.47,
					"windBearing": 236,
					"visibility": 10,
					"cloudCover": 0.27,
					"pressure": 1017.3,
					"ozone": 291.8,
					"uvIndex": 0
					},
					{
					"time": 1499418000,
					"summary": "Partly Cloudy",
					"icon": "partly-cloudy-night",
					"precipIntensity": 0,
					"precipProbability": 0,
					"temperature": 52.87,
					"apparentTemperature": 52.87,
					"dewPoint": 52.44,
					"humidity": 0.98,
					"windSpeed": 5.31,
					"windGust": 9.12,
					"windBearing": 244,
					"visibility": 10,
					"cloudCover": 0.45,
					"pressure": 1016.91,
					"ozone": 291.79,
					"uvIndex": 0
					},
					{
					"time": 1499421600,
					"summary": "Partly Cloudy",
					"icon": "partly-cloudy-night",
					"precipIntensity": 0,
					"precipProbability": 0,
					"temperature": 52.48,
					"apparentTemperature": 52.48,
					"dewPoint": 52.18,
					"humidity": 0.99,
					"windSpeed": 5.81,
					"windGust": 8.5,
					"windBearing": 236,
					"visibility": 10,
					"cloudCover": 0.33,
					"pressure": 1016.79,
					"ozone": 291.81,
					"uvIndex": 0
					},
					{
					"time": 1499425200,
					"summary": "Partly Cloudy",
					"icon": "partly-cloudy-night",
					"precipIntensity": 0,
					"precipProbability": 0,
					"temperature": 51.77,
					"apparentTemperature": 51.77,
					"dewPoint": 51.66,
					"humidity": 1,
					"windSpeed": 5.08,
					"windGust": 7.78,
					"windBearing": 250,
					"visibility": 10,
					"cloudCover": 0.34,
					"pressure": 1016.46,
					"ozone": 291.93,
					"uvIndex": 0
					},
					{
					"time": 1499428800,
					"summary": "Partly Cloudy",
					"icon": "partly-cloudy-night",
					"precipIntensity": 0,
					"precipProbability": 0,
					"temperature": 51.61,
					"apparentTemperature": 51.61,
					"dewPoint": 51.5,
					"humidity": 1,
					"windSpeed": 5.01,
					"windGust": 7.26,
					"windBearing": 245,
					"visibility": 10,
					"cloudCover": 0.35,
					"pressure": 1016.3,
					"ozone": 291.96,
					"uvIndex": 0
					},
					{
					"time": 1499432400,
					"summary": "Partly Cloudy",
					"icon": "partly-cloudy-day",
					"precipIntensity": 0,
					"precipProbability": 0,
					"temperature": 52.11,
					"apparentTemperature": 52.11,
					"dewPoint": 51.89,
					"humidity": 0.99,
					"windSpeed": 4.78,
					"windGust": 7.11,
					"windBearing": 244,
					"visibility": 10,
					"cloudCover": 0.37,
					"pressure": 1016.48,
					"ozone": 292.02,
					"uvIndex": 0
					},
					{
					"time": 1499436000,
					"summary": "Partly Cloudy",
					"icon": "partly-cloudy-day",
					"precipIntensity": 0,
					"precipProbability": 0,
					"temperature": 53.12,
					"apparentTemperature": 53.12,
					"dewPoint": 52.23,
					"humidity": 0.97,
					"windSpeed": 4.65,
					"windGust": 7.15,
					"windBearing": 243,
					"visibility": 10,
					"cloudCover": 0.39,
					"pressure": 1016.84,
					"ozone": 292.11,
					"uvIndex": 0
					},
					{
					"time": 1499439600,
					"summary": "Partly Cloudy",
					"icon": "partly-cloudy-day",
					"precipIntensity": 0,
					"precipProbability": 0,
					"temperature": 54.7,
					"apparentTemperature": 54.7,
					"dewPoint": 52.31,
					"humidity": 0.92,
					"windSpeed": 4.2,
					"windGust": 7.3,
					"windBearing": 238,
					"visibility": 10,
					"cloudCover": 0.52,
					"pressure": 1016.89,
					"ozone": 292.02,
					"uvIndex": 1
					},
					{
					"time": 1499443200,
					"summary": "Partly Cloudy",
					"icon": "partly-cloudy-day",
					"precipIntensity": 0,
					"precipProbability": 0,
					"temperature": 57.3,
					"apparentTemperature": 57.3,
					"dewPoint": 52.73,
					"humidity": 0.85,
					"windSpeed": 4.55,
					"windGust": 7.33,
					"windBearing": 253,
					"visibility": 10,
					"cloudCover": 0.4,
					"pressure": 1017.24,
					"ozone": 291.76,
					"uvIndex": 2
					},
					{
					"time": 1499446800,
					"summary": "Partly Cloudy",
					"icon": "partly-cloudy-day",
					"precipIntensity": 0,
					"precipProbability": 0,
					"temperature": 60.42,
					"apparentTemperature": 60.42,
					"dewPoint": 53.08,
					"humidity": 0.77,
					"windSpeed": 5.33,
					"windGust": 7.48,
					"windBearing": 231,
					"visibility": 10,
					"cloudCover": 0.38,
					"pressure": 1017.27,
					"ozone": 291.35,
					"uvIndex": 3
					},
					{
					"time": 1499450400,
					"summary": "Partly Cloudy",
					"icon": "partly-cloudy-day",
					"precipIntensity": 0,
					"precipProbability": 0,
					"temperature": 63.36,
					"apparentTemperature": 63.36,
					"dewPoint": 53.4,
					"humidity": 0.7,
					"windSpeed": 5.82,
					"windGust": 8.1,
					"windBearing": 246,
					"visibility": 10,
					"cloudCover": 0.36,
					"pressure": 1017.2,
					"ozone": 290.92,
					"uvIndex": 6
					},
					{
					"time": 1499454000,
					"summary": "Partly Cloudy",
					"icon": "partly-cloudy-day",
					"precipIntensity": 0,
					"precipProbability": 0,
					"temperature": 66.04,
					"apparentTemperature": 66.04,
					"dewPoint": 53.68,
					"humidity": 0.64,
					"windSpeed": 6.83,
					"windGust": 9.52,
					"windBearing": 240,
					"visibility": 10,
					"cloudCover": 0.29,
					"pressure": 1016.94,
					"ozone": 290.58,
					"uvIndex": 8
					},
					{
					"time": 1499457600,
					"summary": "Clear",
					"icon": "clear-day",
					"precipIntensity": 0,
					"precipProbability": 0,
					"temperature": 68.64,
					"apparentTemperature": 68.64,
					"dewPoint": 53.92,
					"humidity": 0.59,
					"windSpeed": 7.61,
					"windGust": 11.38,
					"windBearing": 266,
					"visibility": 10,
					"cloudCover": 0.2,
					"pressure": 1016.53,
					"ozone": 290.21,
					"uvIndex": 10
					},
					{
					"time": 1499461200,
					"summary": "Clear",
					"icon": "clear-day",
					"precipIntensity": 0,
					"precipProbability": 0,
					"temperature": 70.96,
					"apparentTemperature": 70.96,
					"dewPoint": 54.11,
					"humidity": 0.55,
					"windSpeed": 8.05,
					"windGust": 12.95,
					"windBearing": 253,
					"visibility": 10,
					"cloudCover": 0.18,
					"pressure": 1015.82,
					"ozone": 289.93,
					"uvIndex": 10
					},
					{
					"time": 1499464800,
					"summary": "Clear",
					"icon": "clear-day",
					"precipIntensity": 0,
					"precipProbability": 0,
					"temperature": 71.22,
					"apparentTemperature": 71.22,
					"dewPoint": 54.03,
					"humidity": 0.55,
					"windSpeed": 9.6,
					"windGust": 14.05,
					"windBearing": 247,
					"visibility": 10,
					"cloudCover": 0.11,
					"pressure": 1015.56,
					"ozone": 289.62,
					"uvIndex": 8
					},
					{
					"time": 1499468400,
					"summary": "Clear",
					"icon": "clear-day",
					"precipIntensity": 0,
					"precipProbability": 0,
					"temperature": 71.06,
					"apparentTemperature": 71.06,
					"dewPoint": 53.81,
					"humidity": 0.54,
					"windSpeed": 9.41,
					"windGust": 14.85,
					"windBearing": 273,
					"visibility": 10,
					"cloudCover": 0.1,
					"pressure": 1014.98,
					"ozone": 289.35,
					"uvIndex": 5
					},
					{
					"time": 1499472000,
					"summary": "Clear",
					"icon": "clear-day",
					"precipIntensity": 0,
					"precipProbability": 0,
					"temperature": 70.16,
					"apparentTemperature": 70.16,
					"dewPoint": 53.52,
					"humidity": 0.56,
					"windSpeed": 9.95,
					"windGust": 15.16,
					"windBearing": 264,
					"visibility": 10,
					"cloudCover": 0.09,
					"pressure": 1014.51,
					"ozone": 289.23,
					"uvIndex": 3
					},
					{
					"time": 1499475600,
					"summary": "Clear",
					"icon": "clear-day",
					"precipIntensity": 0,
					"precipProbability": 0,
					"temperature": 68.26,
					"apparentTemperature": 68.26,
					"dewPoint": 53.21,
					"humidity": 0.59,
					"windSpeed": 9.71,
					"windGust": 14.71,
					"windBearing": 263,
					"visibility": 10,
					"cloudCover": 0.07,
					"pressure": 1014.24,
					"ozone": 289.32,
					"uvIndex": 1
					},
					{
					"time": 1499479200,
					"summary": "Clear",
					"icon": "clear-day",
					"precipIntensity": 0,
					"precipProbability": 0,
					"temperature": 65.7,
					"apparentTemperature": 65.7,
					"dewPoint": 52.93,
					"humidity": 0.63,
					"windSpeed": 9.15,
					"windGust": 13.75,
					"windBearing": 263,
					"visibility": 10,
					"cloudCover": 0.05,
					"pressure": 1014.08,
					"ozone": 289.71,
					"uvIndex": 1
					},
					{
					"time": 1499482800,
					"summary": "Clear",
					"icon": "clear-day",
					"precipIntensity": 0,
					"precipProbability": 0,
					"temperature": 63.42,
					"apparentTemperature": 63.42,
					"dewPoint": 52.33,
					"humidity": 0.67,
					"windSpeed": 7.76,
					"windGust": 12.73,
					"windBearing": 259,
					"visibility": 10,
					"cloudCover": 0.06,
					"pressure": 1013.87,
					"ozone": 289.99,
					"uvIndex": 0
					},
					{
					"time": 1499486400,
					"summary": "Clear",
					"icon": "clear-night",
					"precipIntensity": 0,
					"precipProbability": 0,
					"temperature": 60.82,
					"apparentTemperature": 60.82,
					"dewPoint": 52.56,
					"humidity": 0.74,
					"windSpeed": 7.98,
					"windGust": 11.7,
					"windBearing": 259,
					"visibility": 10,
					"cloudCover": 0.05,
					"pressure": 1014.22,
					"ozone": 290.15,
					"uvIndex": 0
					},
					{
					"time": 1499490000,
					"summary": "Clear",
					"icon": "clear-night",
					"precipIntensity": 0,
					"precipProbability": 0,
					"temperature": 58.5,
					"apparentTemperature": 58.5,
					"dewPoint": 52.43,
					"humidity": 0.8,
					"windSpeed": 7.29,
					"windGust": 10.64,
					"windBearing": 257,
					"visibility": 10,
					"cloudCover": 0.07,
					"pressure": 1014.52,
					"ozone": 290.34,
					"uvIndex": 0
					},
					{
					"time": 1499493600,
					"summary": "Clear",
					"icon": "clear-night",
					"precipIntensity": 0,
					"precipProbability": 0,
					"temperature": 56.59,
					"apparentTemperature": 56.59,
					"dewPoint": 52.35,
					"humidity": 0.86,
					"windSpeed": 6.79,
					"windGust": 9.83,
					"windBearing": 256,
					"visibility": 10,
					"cloudCover": 0.1,
					"pressure": 1014.67,
					"ozone": 290.54,
					"uvIndex": 0
					},
					{
					"time": 1499497200,
					"summary": "Clear",
					"icon": "clear-night",
					"precipIntensity": 0,
					"precipProbability": 0,
					"temperature": 55.23,
					"apparentTemperature": 55.23,
					"dewPoint": 52.37,
					"humidity": 0.9,
					"windSpeed": 6.26,
					"windGust": 9.47,
					"windBearing": 266,
					"visibility": 10,
					"cloudCover": 0.15,
					"pressure": 1014.58,
					"ozone": 290.63,
					"uvIndex": 0
					},
					{
					"time": 1499500800,
					"summary": "Clear",
					"icon": "clear-night",
					"precipIntensity": 0,
					"precipProbability": 0,
					"temperature": 54.02,
					"apparentTemperature": 54.02,
					"dewPoint": 52.42,
					"humidity": 0.94,
					"windSpeed": 6.99,
					"windGust": 9.36,
					"windBearing": 235,
					"visibility": 10,
					"cloudCover": 0.22,
					"pressure": 1014.35,
					"ozone": 290.66,
					"uvIndex": 0
					},
					{
					"time": 1499504400,
					"summary": "Partly Cloudy",
					"icon": "partly-cloudy-night",
					"precipIntensity": 0,
					"precipProbability": 0,
					"temperature": 52.61,
					"apparentTemperature": 52.61,
					"dewPoint": 51.57,
					"humidity": 0.96,
					"windSpeed": 5.85,
					"windGust": 9.23,
					"windBearing": 246,
					"visibility": 10,
					"cloudCover": 0.39,
					"pressure": 1013.73,
					"ozone": 290.8,
					"uvIndex": 0
					},
					{
					"time": 1499508000,
					"summary": "Partly Cloudy",
					"icon": "partly-cloudy-night",
					"precipIntensity": 0,
					"precipProbability": 0,
					"temperature": 51.55,
					"apparentTemperature": 51.55,
					"dewPoint": 51.53,
					"humidity": 1,
					"windSpeed": 6.32,
					"windGust": 8.95,
					"windBearing": 247,
					"visibility": 10,
					"cloudCover": 0.34,
					"pressure": 1013.76,
					"ozone": 291.11,
					"uvIndex": 0
					},
					{
					"time": 1499511600,
					"summary": "Partly Cloudy",
					"icon": "partly-cloudy-night",
					"precipIntensity": 0,
					"precipProbability": 0,
					"temperature": 50.48,
					"apparentTemperature": 50.48,
					"dewPoint": 50.48,
					"humidity": 1,
					"windSpeed": 5.93,
					"windGust": 8.63,
					"windBearing": 245,
					"visibility": 5.91,
					"cloudCover": 0.42,
					"pressure": 1013.39,
					"ozone": 291.59,
					"uvIndex": 0
					},
					{
					"time": 1499515200,
					"summary": "Partly Cloudy",
					"icon": "partly-cloudy-night",
					"precipIntensity": 0,
					"precipProbability": 0,
					"temperature": 49.99,
					"apparentTemperature": 47.82,
					"dewPoint": 49.99,
					"humidity": 1,
					"windSpeed": 5.69,
					"windGust": 8.37,
					"windBearing": 241,
					"visibility": 2.25,
					"cloudCover": 0.49,
					"pressure": 1013.17,
					"ozone": 291.9,
					"uvIndex": 0
					},
					{
					"time": 1499518800,
					"summary": "Foggy",
					"icon": "fog",
					"precipIntensity": 0,
					"precipProbability": 0,
					"temperature": 50.47,
					"apparentTemperature": 50.47,
					"dewPoint": 50.47,
					"humidity": 1,
					"windSpeed": 4.91,
					"windGust": 8.13,
					"windBearing": 255,
					"visibility": 1.46,
					"cloudCover": 0.56,
					"pressure": 1013.24,
					"ozone": 292.15,
					"uvIndex": 0
					},
					{
					"time": 1499522400,
					"summary": "Foggy",
					"icon": "fog",
					"precipIntensity": 0,
					"precipProbability": 0,
					"temperature": 51.48,
					"apparentTemperature": 51.48,
					"dewPoint": 51.48,
					"humidity": 1,
					"windSpeed": 5.71,
					"windGust": 7.92,
					"windBearing": 214,
					"visibility": 1.06,
					"cloudCover": 0.62,
					"pressure": 1013.45,
					"ozone": 292.38,
					"uvIndex": 0
					},
					{
					"time": 1499526000,
					"summary": "Foggy",
					"icon": "fog",
					"precipIntensity": 0,
					"precipProbability": 0,
					"temperature": 53.05,
					"apparentTemperature": 53.05,
					"dewPoint": 52.44,
					"humidity": 0.98,
					"windSpeed": 5.57,
					"windGust": 7.9,
					"windBearing": 236,
					"visibility": 1.41,
					"cloudCover": 0.66,
					"pressure": 1013.71,
					"ozone": 292.4,
					"uvIndex": 1
					},
					{
					"time": 1499529600,
					"summary": "Mostly Cloudy",
					"icon": "partly-cloudy-day",
					"precipIntensity": 0,
					"precipProbability": 0,
					"temperature": 54.91,
					"apparentTemperature": 54.91,
					"dewPoint": 52.77,
					"humidity": 0.92,
					"windSpeed": 5.78,
					"windGust": 8.14,
					"windBearing": 236,
					"visibility": 5.23,
					"cloudCover": 0.63,
					"pressure": 1013.99,
					"ozone": 292.2,
					"uvIndex": 1
					},
					{
					"time": 1499533200,
					"summary": "Partly Cloudy",
					"icon": "partly-cloudy-day",
					"precipIntensity": 0,
					"precipProbability": 0,
					"temperature": 57.3,
					"apparentTemperature": 57.3,
					"dewPoint": 53.2,
					"humidity": 0.86,
					"windSpeed": 6.25,
					"windGust": 8.57,
					"windBearing": 234,
					"visibility": 10,
					"cloudCover": 0.58,
					"pressure": 1014.3,
					"ozone": 291.86,
					"uvIndex": 3
					},
					{
					"time": 1499536800,
					"summary": "Partly Cloudy",
					"icon": "partly-cloudy-day",
					"precipIntensity": 0,
					"precipProbability": 0,
					"temperature": 59.21,
					"apparentTemperature": 59.21,
					"dewPoint": 53.59,
					"humidity": 0.82,
					"windSpeed": 6.94,
					"windGust": 9.2,
					"windBearing": 231,
					"visibility": 10,
					"cloudCover": 0.53,
					"pressure": 1014.47,
					"ozone": 291.7,
					"uvIndex": 5
					},
					{
					"time": 1499540400,
					"summary": "Partly Cloudy",
					"icon": "partly-cloudy-day",
					"precipIntensity": 0,
					"precipProbability": 0,
					"temperature": 61.3,
					"apparentTemperature": 61.3,
					"dewPoint": 53.67,
					"humidity": 0.76,
					"windSpeed": 7.6,
					"windGust": 10.13,
					"windBearing": 234,
					"visibility": 10,
					"cloudCover": 0.44,
					"pressure": 1014.65,
					"ozone": 291.63,
					"uvIndex": 8
					}
				]
			},
			"daily": {
			"summary": "No precipitation throughout the week, with temperatures falling to 64°F on Saturday.",
			"icon": "clear-day",
			"data": [
				{
					"time": 1499324400,
					"summary": "Partly cloudy overnight.",
					"icon": "partly-cloudy-night",
					"sunriseTime": 1499345712,
					"sunsetTime": 1499398561,
					"moonPhase": 0.43,
					"precipIntensity": 0.0009,
					"precipIntensityMax": 0.002,
					"precipIntensityMaxTime": 1499396400,
					"precipProbability": 0.05,
					"precipType": "rain",
					"temperatureMin": 50.53,
					"temperatureMinTime": 1499338800,
					"temperatureMax": 68.49,
					"temperatureMaxTime": 1499382000,
					"apparentTemperatureMin": 50.53,
					"apparentTemperatureMinTime": 1499338800,
					"apparentTemperatureMax": 68.49,
					"apparentTemperatureMaxTime": 1499382000,
					"dewPoint": 52.4,
					"humidity": 0.81,
					"windSpeed": 5.96,
					"windGust": 13.92,
					"windGustTime": 1499389200,
					"windBearing": 250,
					"visibility": 10,
					"cloudCover": 0.15,
					"pressure": 1017.21,
					"ozone": 291.37,
					"uvIndex": 11,
					"uvIndexTime": 1499371200
				},
				{
					"time": 1499410800,
					"summary": "Partly cloudy until afternoon.",
					"icon": "partly-cloudy-day",
					"sunriseTime": 1499432146,
					"sunsetTime": 1499484945,
					"moonPhase": 0.46,
					"precipIntensity": 0,
					"precipIntensityMax": 0,
					"precipProbability": 0,
					"temperatureMin": 51.61,
					"temperatureMinTime": 1499428800,
					"temperatureMax": 71.22,
					"temperatureMaxTime": 1499464800,
					"apparentTemperatureMin": 51.61,
					"apparentTemperatureMinTime": 1499428800,
					"apparentTemperatureMax": 71.22,
					"apparentTemperatureMaxTime": 1499464800,
					"dewPoint": 52.81,
					"humidity": 0.78,
					"windSpeed": 6.69,
					"windGust": 15.16,
					"windGustTime": 1499472000,
					"windBearing": 253,
					"visibility": 10,
					"cloudCover": 0.24,
					"pressure": 1015.96,
					"ozone": 290.85,
					"uvIndex": 10,
					"uvIndexTime": 1499457600
				},
				{
					"time": 1499497200,
					"summary": "Foggy in the morning.",
					"icon": "fog",
					"sunriseTime": 1499518582,
					"sunsetTime": 1499571327,
					"moonPhase": 0.48,
					"precipIntensity": 0.0005,
					"precipIntensityMax": 0.0014,
					"precipIntensityMaxTime": 1499580000,
					"precipProbability": 0.02,
					"precipType": "rain",
					"temperatureMin": 49.99,
					"temperatureMinTime": 1499515200,
					"temperatureMax": 64.36,
					"temperatureMaxTime": 1499551200,
					"apparentTemperatureMin": 47.82,
					"apparentTemperatureMinTime": 1499515200,
					"apparentTemperatureMax": 64.36,
					"apparentTemperatureMaxTime": 1499551200,
					"dewPoint": 52.84,
					"humidity": 0.87,
					"windSpeed": 7.14,
					"windGust": 12.45,
					"windGustTime": 1499554800,
					"windBearing": 241,
					"visibility": 10,
					"cloudCover": 0.36,
					"pressure": 1013.57,
					"ozone": 291.62,
					"uvIndex": 10,
					"uvIndexTime": 1499544000
				},
				{
					"time": 1499583600,
					"summary": "Foggy in the morning.",
					"icon": "fog",
					"sunriseTime": 1499605018,
					"sunsetTime": 1499657708,
					"moonPhase": 0.52,
					"precipIntensity": 0.0008,
					"precipIntensityMax": 0.0023,
					"precipIntensityMaxTime": 1499608800,
					"precipProbability": 0.04,
					"precipType": "rain",
					"temperatureMin": 49.84,
					"temperatureMinTime": 1499601600,
					"temperatureMax": 65.15,
					"temperatureMaxTime": 1499644800,
					"apparentTemperatureMin": 47.38,
					"apparentTemperatureMinTime": 1499601600,
					"apparentTemperatureMax": 65.15,
					"apparentTemperatureMaxTime": 1499644800,
					"dewPoint": 52.82,
					"humidity": 0.87,
					"windSpeed": 6.59,
					"windGust": 11.82,
					"windGustTime": 1499648400,
					"windBearing": 231,
					"cloudCover": 0.38,
					"pressure": 1012.23,
					"ozone": 292.57,
					"uvIndex": 9,
					"uvIndexTime": 1499630400
				},
				{
					"time": 1499670000,
					"summary": "Mostly cloudy overnight.",
					"icon": "partly-cloudy-night",
					"sunriseTime": 1499691456,
					"sunsetTime": 1499744087,
					"moonPhase": 0.55,
					"precipIntensity": 0,
					"precipIntensityMax": 0,
					"precipProbability": 0,
					"temperatureMin": 52.38,
					"temperatureMinTime": 1499684400,
					"temperatureMax": 66.03,
					"temperatureMaxTime": 1499724000,
					"apparentTemperatureMin": 52.38,
					"apparentTemperatureMinTime": 1499684400,
					"apparentTemperatureMax": 66.03,
					"apparentTemperatureMaxTime": 1499724000,
					"dewPoint": 53.3,
					"humidity": 0.83,
					"windSpeed": 7,
					"windGust": 16.11,
					"windGustTime": 1499731200,
					"windBearing": 234,
					"cloudCover": 0.06,
					"pressure": 1011,
					"ozone": 298.44,
					"uvIndex": 11,
					"uvIndexTime": 1499716800
				},
				{
					"time": 1499756400,
					"summary": "Partly cloudy in the morning.",
					"icon": "partly-cloudy-day",
					"sunriseTime": 1499777895,
					"sunsetTime": 1499830464,
					"moonPhase": 0.58,
					"precipIntensity": 0,
					"precipIntensityMax": 0,
					"precipProbability": 0,
					"temperatureMin": 53.12,
					"temperatureMinTime": 1499774400,
					"temperatureMax": 66.79,
					"temperatureMaxTime": 1499806800,
					"apparentTemperatureMin": 53.12,
					"apparentTemperatureMinTime": 1499774400,
					"apparentTemperatureMax": 66.79,
					"apparentTemperatureMaxTime": 1499806800,
					"dewPoint": 52.51,
					"humidity": 0.82,
					"windSpeed": 6.98,
					"windGust": 12.25,
					"windGustTime": 1499814000,
					"windBearing": 228,
					"cloudCover": 0.3,
					"pressure": 1011.34,
					"ozone": 307.5,
					"uvIndex": 11,
					"uvIndexTime": 1499803200
				},
				{
					"time": 1499842800,
					"summary": "Clear throughout the day.",
					"icon": "clear-day",
					"sunriseTime": 1499864335,
					"sunsetTime": 1499916839,
					"moonPhase": 0.61,
					"precipIntensity": 0,
					"precipIntensityMax": 0,
					"precipProbability": 0,
					"temperatureMin": 52.87,
					"temperatureMinTime": 1499857200,
					"temperatureMax": 67.07,
					"temperatureMaxTime": 1499896800,
					"apparentTemperatureMin": 52.87,
					"apparentTemperatureMinTime": 1499857200,
					"apparentTemperatureMax": 67.07,
					"apparentTemperatureMaxTime": 1499896800,
					"dewPoint": 52.6,
					"humidity": 0.81,
					"windSpeed": 6.63,
					"windGust": 12.57,
					"windGustTime": 1499900400,
					"windBearing": 235,
					"cloudCover": 0,
					"pressure": 1012.22,
					"ozone": 303.64,
					"uvIndex": 11,
					"uvIndexTime": 1499889600
				},
				{
					"time": 1499929200,
					"summary": "Partly cloudy overnight.",
					"icon": "partly-cloudy-night",
					"sunriseTime": 1499950775,
					"sunsetTime": 1500003212,
					"moonPhase": 0.65,
					"precipIntensity": 0,
					"precipIntensityMax": 0,
					"precipProbability": 0,
					"temperatureMin": 53.19,
					"temperatureMinTime": 1499943600,
					"temperatureMax": 68.74,
					"temperatureMaxTime": 1499983200,
					"apparentTemperatureMin": 53.19,
					"apparentTemperatureMinTime": 1499943600,
					"apparentTemperatureMax": 68.74,
					"apparentTemperatureMaxTime": 1499983200,
					"dewPoint": 52.79,
					"humidity": 0.81,
					"windSpeed": 5.91,
					"windGust": 12.63,
					"windGustTime": 1499986800,
					"windBearing": 239,
					"cloudCover": 0.03,
					"pressure": 1014.09,
					"ozone": 296.36,
					"uvIndex": 11,
					"uvIndexTime": 1499976000
				}
				]
				}
			}
}