import React from 'react'
import { WeatherData } from '../../types/weather'

interface WeatherCardProps {
  data: WeatherData
}

const WeatherCard: React.FC<WeatherCardProps> = ({ data }) => {
  return (
    <div className="p-6 bg-white shadow rounded text-center">
      <h2 className="text-2xl font-bold">
        {data.name}, {data.sys.country}
      </h2>
      <p className="text-lg">{data.main.temp}°C</p>
      <p className="text-sm text-gray-500">{data.weather[0].description}</p>
    </div>
  )
}

export default WeatherCard
