import { useQuery } from 'react-query'
import { fetchWeatherByCity } from '../../api/weather/weatherApi'
import { WeatherData } from 'types/weather'

export const useWeather = (city: string) => {
  return useQuery<WeatherData, Error>(
    ['weather', city],
    () => fetchWeatherByCity(city),
    {
      enabled: !!city,
      refetchOnWindowFocus: false,
    },
  )
}
