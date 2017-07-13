function wholeNumber(value){
	return typeof value === 'number' ? value.toFixed(0) : '';
}

function percentage(value){
	return typeof value === 'number' ? wholeNumber(value * 100) + '%' : '';
}

module.exports = {
	wholeNumber,
	percentage
}