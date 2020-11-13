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
    openweather.get(`weather?q=${cityName}&appid=6036a038a5aecd393373e79aed8f46ef`)
      .then((response: any) => {
        dispatch(cityWeatherFetchedSuccess({
          name: response.data.name,
          clouds: response.data.clouds.all,
          temp: {
            feels_like: response.data.main.feels_like,
            max: response.data.main.temp_max,
            min: response.data.main.temp_min,
            current: response.data.main.temp
          },
          humidity: response.data.main.humidity,
          pressure: response.data.main.pressure
        }))
      })
      .catch((error) => {
        console.log('catch error')
        dispatch(cityWeatherFetchedFailure())
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
  return function (dispatch) {
    openweather.get(`find?lat=${userCoords.lat}&lon=${userCoords.long}&cnt=${1}&appid=6036a038a5aecd393373e79aed8f46ef`)
      .then((response) => {
        console.log(response)

        const city = response.data.list[0];
        dispatch(cityWeatherFetchedSuccess({
          name: city.name,
          clouds: city.clouds.all,
          temp: {
            feels_like: city.main.feels_like,
            max: city.main.temp_max,
            min: city.main.temp_min,
            current: city.main.temp
          },
          humidity: city.main.humidity,
          pressure: city.main.pressure
        }))
      })
      .catch((error) => {
      })
  }
}