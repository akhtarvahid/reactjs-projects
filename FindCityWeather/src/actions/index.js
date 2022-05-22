import axios from "axios";
import { OPEN_WEATHER_API_KEY } from "../api_key/key";
import { FETCH_WEATHER_FAILED, FETCH_WEATHER_SUCCESS } from "./action-types";

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${OPEN_WEATHER_API_KEY}`;


export const fetchWeather = (city) => dispatch => {
  const url = `${ROOT_URL}&q=${city},IN`;
  axios
    .get(url)
    .then(res => 
      dispatch({
        type: FETCH_WEATHER_SUCCESS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: FETCH_WEATHER_FAILED,
        payload: null
      })
    );
}