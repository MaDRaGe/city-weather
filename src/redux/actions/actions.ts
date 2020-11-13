import {
  FETCH_CITY_WEATHER,
  CITY_WEATHER_FETCH_SUCCESS,
  CITY_WEATHER_FETCH_FAILURE,
  LOAD_CITY_LIST_FROM_LOCAL_STORAGE,
  CompanyActionTypes
} from '../types';
import github from '../../api/openweather';

export const fetchCityWeather = (cityName: string) => {
  return (dispatch) => {
    github.get(`weather?q=${cityName}&appid=6036a038a5aecd393373e79aed8f46ef`)
      .then((response: any) => {
        console.log(response)
        dispatch(cityWeatherFetchedSuccess({
          name: response.data.name,
          clouds: response.data.clouds.all,
          temp: {
            feels_like: response.data.main.feels_like,
            max: response.data.main.temp_max,
            min: response.data.main.temp_min,
            current: response.data.main.temp
          },
          humidity: response.data.humidity,
          pressure: response.data.pressure
        }))
      })
      .catch(() => {
        dispatch(cityWeatherFetchedFailure())
      })
  }
}

export const cityWeatherFetchedSuccess = (cityWeather) => {
  return {
    type: CITY_WEATHER_FETCH_SUCCESS,
    payload: cityWeather
  }
}

export const cityWeatherFetchedFailure = () => {
  return {
    type: CITY_WEATHER_FETCH_FAILURE
  }
}

export const loadCityListFromLocalStorage = () => {
  return {
    type: LOAD_CITY_LIST_FROM_LOCAL_STORAGE
  }
}