export const CITY_WEATHER_FETCH_SUCCESS = 'CITY_WEATHER_FETCH_SUCCESS';
export const CITY_WEATHER_FETCH_FAILURE = 'CITY_WEATHER_FETCH_FAILURE';
export const FETCH_CITY_WEATHER = 'FETCH_CITY_WEATHER';
export const LOAD_CITY_LIST_FROM_LOCAL_STORAGE = 'LOAD_CITY_LIST_FROM_LOCAL_STORAGE';
export const DELETE_CITY = 'DELETE_CITY'

export interface IWeather {

}

export interface Store {

}

interface FecthCityWeatherAction {
  type: typeof FETCH_CITY_WEATHER,
  payload: string
}

interface CityFetchWeatherSuccessAction {
  type: typeof CITY_WEATHER_FETCH_SUCCESS
  payload: any[]
}

interface CityFetchWeatherFailureAction {
  type: typeof CITY_WEATHER_FETCH_FAILURE
}

interface LoadCityListFromLocalStorageAction {
  type: typeof LOAD_CITY_LIST_FROM_LOCAL_STORAGE
}

interface DeleteCityAction {
  type: typeof DELETE_CITY
}

export type CityActionType = 
  FecthCityWeatherAction |
  CityFetchWeatherSuccessAction |
  CityFetchWeatherFailureAction | 
  DeleteCityAction |
  LoadCityListFromLocalStorageAction;

