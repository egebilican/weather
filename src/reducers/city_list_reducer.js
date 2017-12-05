import { CITY_ADD, CITY_DELETE } from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case CITY_ADD:
      if (state.indexOf(action.payload) == -1) {
        return [...state, action.payload];
      }
      return state;
    case CITY_DELETE:
      const newState = state.filter(city => {
        return city != action.payload;
      });
      return newState;
    default:
      return state;
  }
};
