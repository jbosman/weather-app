function toCelcius(value){ 
	return(value - 32) * (5/9); 
} 

function percentage(value){
	return typeof value === 'number' ? wholeNumber(value * 100) : -1;
}

function wholeNumber(value){
	return typeof value === 'number' ? value.toFixed(0) : '';
}

module.exports = {
	toCelcius,
	percentage,
	wholeNumber
}