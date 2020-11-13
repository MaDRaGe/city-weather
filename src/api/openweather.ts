import axios from 'axios';

const apiKey = '6036a038a5aecd393373e79aed8f46ef';

class Weather {
  private api = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5',
  });

  public async getCityByName(cityName: string): Promise<any> {
    try {
      const response = await this.api.get(`weather?q=${cityName}&appid=${apiKey}`)
      return {
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
        }
    } catch (error) {
      return {
          error: true
        }
    }
      
  }

  public async getCityByCoords(userCoords): Promise<any> {
    try {
      const response = await this.api.get(`find?lat=${userCoords.lat}&lon=${userCoords.long}&cnt=${1}&appid=${apiKey}`)
      const city = response.data.list[0];
      return {
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
      }
    } catch (error) {
      return {
        error: true
      }
    }
  }
}

const weather = Object.freeze(new Weather());

export default weather