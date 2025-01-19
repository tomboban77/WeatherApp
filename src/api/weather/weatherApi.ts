import axiosInstance from 'utils/axiosInstance'
import { WeatherData } from '../../types/weather'
import URLS from 'constants/urls'
import { AppError } from 'utils/errorHandler'

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY
const BASE_URL = URLS.WEATHER_PAGE.BASE_URL

export const fetchWeatherByCity = async (
  city: string,
): Promise<WeatherData> => {
  try {
    const response = await axiosInstance.get(`${BASE_URL}/weather`, {
      params: {
        q: city,
        units: 'metric',
        appid: API_KEY,
      },
    })

    if (response.data.cod !== 200) {
      throw new Error(response.data.message || 'An unexpected error occurred.')
    }

    return response.data
  } catch (error: unknown) {
    throw error as AppError
  }
}
