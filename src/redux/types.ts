export const CITY_WEATHER_FETCH_SUCCESS = 'CITY_WEATHER_FETCH_SUCCESS';
export const CITY_WEATHER_FETCH_FAILURE = 'CITY_WEATHER_FETCH_FAILURE';
export const FETCH_CITY_WEATHER = 'FETCH_CITY_WEATHER';
export const LOAD_CITY_LIST_FROM_LOCAL_STORAGE = 'LOAD_CITY_LIST_FROM_LOCAL_STORAGE';

export interface IWeather {

}

export interface Store {

}

interface FecthCityWeatherAction {
  type: typeof FETCH_CITY_WEATHER,
  payload: string
}

interface CityFetchWeatherSuccess {
  type: typeof CITY_WEATHER_FETCH_SUCCESS
}

interface CityFetchWeatherFailure {
  type: typeof CITY_WEATHER_FETCH_FAILURE
}

export type CompanyActionTypes = 
  FecthCityWeatherAction |
  CityFetchWeatherSuccess |
  CityFetchWeatherFailure;

