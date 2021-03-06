import Moment from 'moment';

// Generic functions
export function timestampToDate(timestamp){
	return new Date(timestamp * 1000);
}

export function formatDateString(date){
	return Moment(date).format('MMMM Do');
}

export function formatHourString(date){
	return Moment(date).format('LT');
}

export function dayOfWeek(date){
	return Moment(date).day();
}

export function isSameDay(date){
	const today = Moment(new Date());
	const checkDate = Moment(date);
	return (
		( today.date()  === checkDate.date()  ) &&  
		( today.month() === checkDate.month() ) && 
		( today.year() === checkDate.year() )
	); 
}

export function getHour(timestamp){
	const date = timestampToDate(timestamp);
	const hour = Moment(date).hour() % 12;
	return hour ? hour : 12 ;
}

export function getFormatedHourString(timestamp){
	const date = timestampToDate(timestamp);
	return timestamp ? formatHourString(date) : '-- : --';
}

export function getDayOfWeek(timestamp){
	const daysOfWeek = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
	const date = timestampToDate(timestamp);
	const dayOfWeekNum = dayOfWeek(date);
	const day = isSameDay(date) ? 'Today' : daysOfWeek[ dayOfWeekNum ];
	return timestamp ? day : '--------';
}

export function getDateString(timestamp){
	const date = timestampToDate(timestamp);
	return timestamp ? formatDateString( date ) : '---- --';
}