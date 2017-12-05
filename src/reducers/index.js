import {combineReducers} from 'redux';
import WeatherReducer from './weather_reducer';
import CityFormReducer from './city_form_reducer';
import CityListReducer from './city_list_reducer';

export default combineReducers({
  weather: WeatherReducer,
  cityForm: CityFormReducer,
  cityList : CityListReducer
})