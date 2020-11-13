import {
  DELETE_CITY,
  CITY_WEATHER_FETCH_SUCCESS,
  CITY_WEATHER_FETCH_FAILURE,
  LOAD_CITY_LIST_FROM_LOCAL_STORAGE,
  CityActionType,
  IDayWeather
} from '../types';
import openweather from '../../api/openweather';

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

export const deleteCity = (cityName: string): CityActionType => {
  return {
    type: DELETE_CITY,
    payload: cityName
  }
}

export const loadUserCity = (userCoords: { lat: number, long: number }): Function => {
  return (dispatch) => {
    openweather.getForecastByCityCoords(userCoords)
      .then((response) => {
        if (!response.error) {
          dispatch(cityWeatherFetchedSuccess(response))
        }
      })
  }
}

export const fetchWeekForecastByCityName = (cityName: string): Function => {
  return (dispatch) => {
    openweather.getForecastByCityName(cityName)
      .then((response) => {
        if (response.error) {
          dispatch(cityWeatherFetchedFailure())
        } else {
          dispatch(cityWeatherFetchedSuccess(response))
        }
      })
  }
}