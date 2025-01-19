import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { WeatherData } from '../../types/weather'
import LABELS from 'constants/weather'

interface WeatherCardProps {
  data: WeatherData
}

const WeatherCard: React.FC<WeatherCardProps> = ({ data }) => {
  return (
    <Card
      sx={{
        backgroundColor: 'white',
        boxShadow: 3,
        borderRadius: 2,
        textAlign: 'center',
        padding: 2,
      }}
    >
      <CardContent>
        <Typography variant="h5" component="h2" fontWeight="bold">
          {data.name}, {data.sys.country}
        </Typography>
        <Typography variant="h6" color="textSecondary" mt={1}>
          {data.main.temp} {LABELS.WEATHER_CARD.TEMPERATURE_UNIT}
        </Typography>
        <Typography variant="body2" color="text.secondary" mt={1}>
          {data.weather[0].description}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default WeatherCard
