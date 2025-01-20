import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { WeatherData } from '../../types/weather'
import { Box, Grid2 } from '@mui/material'

interface WeatherCardProps {
  data: WeatherData
}

const WeatherCard: React.FC<WeatherCardProps> = ({ data }) => {
  return (
    <Card
      sx={{
        background: 'linear-gradient(to bottom, #3f355e, #15173e)',
        backdropFilter: 'blur(10px)',
        borderRadius: '16px',
        color: 'white',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3)',
        padding: '1.5rem',
        marginTop: '1rem',
      }}
    >
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
          <Grid2
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 2,
            }}
          >
            <img
              src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
              alt={data.weather[0].description}
              style={{ width: '60px', height: '60px' }}
            />
            <Typography variant="h2" fontWeight="bold">
              {Math.round(data.main.temp)}°C
            </Typography>
          </Grid2>
          <Grid2>
            <Typography
              variant="h6"
              sx={{
                marginTop: '0.5rem',
                textTransform: 'capitalize',
              }}
            >
              {data.weather[0].description}
            </Typography>
            <Typography sx={{ textTransform: 'capitalize', fontSize: '1rem' }}>
              Feels like: {Math.round(data.main.feels_like)}°C
            </Typography>
          </Grid2>
        </Box>
        <Typography
          variant="body2"
          sx={{ display: 'flex', justifyContent: 'space-between' }}
        >
          <span>High: {Math.round(data.main.temp_max)}°</span>
          <span>Low: {Math.round(data.main.temp_min)}°</span>
        </Typography>

        {/* <Typography variant="h5" component="h2" fontWeight="bold">
          {data.name}, {data.sys.country}
        </Typography>
        <Typography variant="h6" color="textSecondary" mt={1}>
          {data.main.temp}°C
        </Typography>
        <Typography variant="body2" color="text.secondary" mt={1}>
          {data.weather[0].description}
        </Typography> */}
      </CardContent>
    </Card>
  )
}

export default WeatherCard
