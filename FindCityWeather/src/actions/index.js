import axios from "axios";
import { OPEN_WEATHER_API_KEY } from "../api_key/key";

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${OPEN_WEATHER_API_KEY}`;

export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},IN`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}