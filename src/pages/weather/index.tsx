import React, { useState } from 'react'
import SearchBar from '../../components/searchBar'
import WeatherCard from '../../components/weather'
import { useWeather } from '../../hooks/weather/hooks'

const WeatherPage: React.FC = () => {
  const [city, setCity] = useState<string>('')
  const { data, error, isLoading } = useWeather(city)

  const handleSearch = (city: string) => {
    setCity(city)
  }

  return (
    <div className="p-8 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Weather App</h1>
      <SearchBar onSearch={handleSearch} />
      {isLoading && <p>Loading...</p>}
      {error && (
        <p>
          {error.message || 'Could not fetch weather data. Try another city.'}
        </p>
      )}
      {data && <WeatherCard data={data} />}
    </div>
  )
}

export default WeatherPage
