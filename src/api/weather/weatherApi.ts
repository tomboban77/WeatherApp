import axios from 'axios'
import { WeatherData } from '../../types/weather'

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY
const BASE_URL = 'http://api.openweathermap.org/data/2.5'

export const fetchWeatherByCity = async (
  city: string,
): Promise<WeatherData> => {
  const response = await axios.get(`${BASE_URL}/weather?`, {
    params: {
      q: city,
      units: 'metric',
      appid: API_KEY,
    },
  })
  return response.data
}
