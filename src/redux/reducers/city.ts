import {
  FETCH_CITY_WEATHER,
  CITY_WEATHER_FETCH_FAILURE,
  CITY_WEATHER_FETCH_SUCCESS
} from '../types';

const initialState = {
  cityList: []
}

const city = (state = initialState, action) => {
  switch (action.type) {
    case CITY_WEATHER_FETCH_SUCCESS:
      return {
        ...state,
        cityList: [
          action.payload,
          ...state.cityList,
        ]
      }
    case CITY_WEATHER_FETCH_FAILURE:
    default: 
      return state;
  }
}

export default city;