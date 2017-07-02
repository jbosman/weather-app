// Converts from the Dark Sky Icon Name to the Weather Icon
// Dark Sky API Icon Names - https://darksky.net/dev/docs/response (scroll to icon)
// Weather Icons - https://erikflowers.github.io/weather-icons/
function convertToWeatherIcon(darkSkyIconName){
	const converter = {
		'clear-day': 			'wi-day-sunny', 
		'clear-night': 			'wi-night-clear', 
		'rain': 				'wi-day-rain',
		'snow': 				'wi-day-snow', 
		'sleet': 				'wi-day-sleet', 
		'wind': 				'wi-day-windy', 
		'fog': 					'wi-day-fog', 
		'cloudy': 				'wi-cloudy',
		'partly-cloudy-day': 	'wi-day-cloudy',
		'partly-cloudy-night': 	'wi-night-alt-cloudy' 
	}

	return converter[darkSkyIconName];
}

function convertToMoonPhase(value){

	const numOfPhases = 28;
	const phaseIcons = [
		'wi-moon-alt-new',
		'wi-moon-alt-waxing-crescent-1',
		'wi-moon-alt-waxing-crescent-2',
		'wi-moon-alt-waxing-crescent-3',
		'wi-moon-alt-waxing-crescent-4',
		'wi-moon-alt-waxing-crescent-5',
		'wi-moon-alt-waxing-crescent-6',
		'wi-moon-alt-first-quarter',
		'wi-moon-alt-waxing-gibbous-1',
		'wi-moon-alt-waxing-gibbous-2',
		'wi-moon-alt-waxing-gibbous-3',
		'wi-moon-alt-waxing-gibbous-4',
		'wi-moon-alt-waxing-gibbous-5',
		'wi-moon-alt-waxing-gibbous-6',
		'wi-moon-alt-full',
		'wi-moon-alt-waning-gibbous-1',
		'wi-moon-alt-waning-gibbous-2',
		'wi-moon-alt-waning-gibbous-3',
		'wi-moon-alt-waning-gibbous-4',
		'wi-moon-alt-waning-gibbous-5',
		'wi-moon-alt-waning-gibbous-6',
		'wi-moon-alt-third-quarter',
		'wi-moon-alt-waning-crescent-1',
		'wi-moon-alt-waning-crescent-2',
		'wi-moon-alt-waning-crescent-3',
		'wi-moon-alt-waning-crescent-4',
		'wi-moon-alt-waning-crescent-5',
		'wi-moon-alt-waning-crescent-6',
	]
	
	return phaseIcons[Math.floor(value * numOfPhases)];
}

module.exports = {
	convertToWeatherIcon,
	convertToMoonPhase
}