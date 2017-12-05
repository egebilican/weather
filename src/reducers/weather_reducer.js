import { FETCH_WEATHER, CLEAR_WEATHER } from '../actions/types';
INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_WEATHER:    
      return [...state, action.payload];
    case CLEAR_WEATHER:
    console.log(action.type);
      return INITIAL_STATE;
    default:
      return state;
  }
};
