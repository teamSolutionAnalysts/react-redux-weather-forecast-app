import axios from 'axios';

export const AT_FETCH_WEATHER = 'AT_FETCH_WEATHER';

const buildUrl = (cityName) => {
	console.log(cityName);
	return `http://api.openweathermap.org/data/2.5/forecast?q=${cityName},in&appid=44b699f68ada27bd6f97809ddb146324`
}

export function fetchWeather(cityName) {
	return {
		type: AT_FETCH_WEATHER,
		payload: axios.get(buildUrl(cityName))
	}
};