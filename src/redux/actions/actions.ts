import {
  DELETE_CITY,
  CITY_WEATHER_FETCH_SUCCESS,
  CITY_WEATHER_FETCH_FAILURE,
  LOAD_CITY_LIST_FROM_LOCAL_STORAGE,
  LOAD_USER_CITY,
  CityActionType
} from '../types';
import openweather from '../../api/openweather';

export const fetchCityWeather = (cityName: string) => {
  return (dispatch) => {
    openweather.getCityByName(cityName)
      .then((response) => {
        if (response.error) {
          dispatch(cityWeatherFetchedFailure())
        } else {
          dispatch(cityWeatherFetchedSuccess(response))
        }
      })
  }
}

export const cityWeatherFetchedSuccess = (cityWeather): CityActionType => {
  return {
    type: CITY_WEATHER_FETCH_SUCCESS,
    payload: cityWeather
  }
}

export const cityWeatherFetchedFailure = (): CityActionType => {
  return {
    type: CITY_WEATHER_FETCH_FAILURE
  }
}

export const loadCityListFromLocalStorage = (): CityActionType => {
  return {
    type: LOAD_CITY_LIST_FROM_LOCAL_STORAGE
  }
}

export const deleteCity = (cityName): CityActionType => {
  return {
    type: DELETE_CITY,
    payload: cityName
  }
}

export const loadUserCity = (userCoords) => {
  return (dispatch) => {
    openweather.getCityByCoords(userCoords)
      .then((response) => {
        if (!response.error) {
          dispatch(cityWeatherFetchedSuccess(response))
        }
      })
  }
}