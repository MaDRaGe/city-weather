import axios from 'axios';

const apiKey = '9e283940719a44b5ae0120745201311';

class Weather {
  private api = axios.create({
    baseURL: 'http://api.weatherapi.com/v1',
  });

  public async getForecastByCityName(cityName) {
    try {
      const response = await this.api.get(`forecast.json?q=${cityName}&days=${7}&key=${apiKey}`)
      console.log(response)
      const days = response.data.forecast.forecastday.map((day) => {
        return {
          date: day.date,
          clouds: day.hour[12].cloud,
          temp: day.hour[12].temp_c,
          humidity: day.hour[12].humidity,
          pressure: day.hour[12].pressure_in
        }
      })
      return {
        name: response.data.location.name,
        days: days
      }
    } catch (error) {
      return {
        error: true
      }
    }
  }

  public async getForecastByCityCoords(userCoords): Promise<any> {
    try {
      const response = await this.api.get(`forecast.json?q=${userCoords.lat},${userCoords.long}&days=7&key=${apiKey}`)
      const days = response.data.forecast.forecastday.map((day) => {
        return {
          date: day.date,
          clouds: day.hour[12].cloud,
          temp: day.hour[12].temp_c,
          humidity: day.hour[12].humidity,
          pressure: day.hour[12].pressure_in
        }
      })
      return {
        name: response.data.location.name,
        days: days
      }
    } catch (error) {
      return 
    }
  }
}

const weather = Object.freeze(new Weather());

export default weather