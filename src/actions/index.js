import axios from 'axios';

const API_KEY = '17d5d4ed0efd3f2d47b49fa95980ef95';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
    const url = `${ROOT_URL}&q=${city}&units=metric`;
    const request = axios.get(url);

    console.log('Request:', request);

    return{
        type: FETCH_WEATHER,
        payload: request
    }
}