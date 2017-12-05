import { CITY_CHANGED } from '../actions/types';


export default (state = '', action) =>{
  switch(action.type) {
    case CITY_CHANGED :
      return action.payload;
    default :
      return state;
  }
}