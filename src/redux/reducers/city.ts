import {
  DELETE_CITY,
  CITY_WEATHER_FETCH_FAILURE,
  CITY_WEATHER_FETCH_SUCCESS,
  LOAD_CITY_LIST_FROM_LOCAL_STORAGE
} from '../types';

const initialState = {
  cityList: [],
  isFetchSuccess: true,
}

const city = (state = initialState, action) => {
  switch (action.type) {
    case CITY_WEATHER_FETCH_SUCCESS:
      const isContainsCity = state.cityList.filter(function (city) {
        return city.name === action.payload.name
      })
      if (isContainsCity.length > 0) {
        return state
      }
      localStorage.setItem("cityList", JSON.stringify([
        action.payload,
        ...state.cityList
      ]));
      return {
        ...state,
        isFetchSuccess: true,
        cityList: [
          action.payload,
          ...state.cityList,
        ]
      }
    case CITY_WEATHER_FETCH_FAILURE:
      console.log('fail')
      return {
        ...state,
        isFetchSuccess: false
      }
    case LOAD_CITY_LIST_FROM_LOCAL_STORAGE:
      let cityList = JSON.parse(localStorage.getItem("cityList")) || [];
      return {
        ...state,
        cityList: cityList
      }
    case DELETE_CITY: 
      const newCityList = state.cityList.filter((city) => {
        return city.name !== action.payload
      })
      localStorage.setItem("cityList", JSON.stringify(newCityList))
      return {
        ...state,
        cityList: newCityList
      }
    default: 
      return state;
  }
}

export default city;