import {
  FETCH_CITY_WEATHER,
  CITY_WEATHER_FETCH_FAILURE,
  CITY_WEATHER_FETCH_SUCCESS,
  LOAD_CITY_LIST_FROM_LOCAL_STORAGE
} from '../types';

const initialState = {
  cityList: []
}

const city = (state = initialState, action) => {
  switch (action.type) {
    case CITY_WEATHER_FETCH_SUCCESS:
      localStorage.setItem("cityList", JSON.stringify([
        action.payload,
        ...state.cityList
      ]));
      return {
        ...state,
        cityList: [
          action.payload,
          ...state.cityList,
        ]
      }
    case CITY_WEATHER_FETCH_FAILURE:
    case LOAD_CITY_LIST_FROM_LOCAL_STORAGE:
      console.log('load city');
      return {
        ...state,
        cityList: JSON.parse(localStorage.getItem("cityList"))
      }
    default: 
      return state;
  }
}

export default city;