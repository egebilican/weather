import {
  FETCH_WEATHER,
  CITY_CHANGED,
  CITY_ADD,
  CLEAR_WEATHER,
  CITY_DELETE
} from './types';
import { Actions } from 'react-native-router-flux';

export const fetchWeather = CITY => {
  const API_KEY = 'a80307f17153e43bd54de3ba51619890';
  const units = 'metric';
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${CITY}&APPID=${API_KEY}&units=${units}`;
  const apixu = 'http://api.apixu.com/v1/current.json?key=fd93b40e4a9a499a94f155258171707&q=Paris';

  return dispatch => {
    fetch(url)
      .catch(error => {
        console.log('error:', error)
        alert(error.message);
    })
      .then(response => response.json())
      .then(response => {
        dispatch({
          type: FETCH_WEATHER,
          payload: response        });
      });
  };
};

export const clearWeather = () => {
  return {
    type: CLEAR_WEATHER
  };
};

export const cityChanged = value => {
  return {
    type: CITY_CHANGED,
    payload: value
  };
};

export const cityAdd = city => {
  let cityLower = city.toLowerCase();
  Actions.weatherList({type:'reset'});
  return {
    type: CITY_ADD,
    payload: cityLower
  };
};

export const cityDelete = city => {
  return {
    type: CITY_DELETE,
    payload: city
  };
};
