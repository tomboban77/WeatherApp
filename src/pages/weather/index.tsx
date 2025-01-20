import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import CircularProgress from '@mui/material/CircularProgress'
import WeatherCard from '../../components/weather'
import { useWeather } from '../../hooks/weather/hooks'
import InputField from '../../components/common/InputField'
import SearchButton from '../../components/common/Button'
import LABELS from 'constants/weather'
import ErrorComponent from '../../components/error'

const WeatherPage: React.FC = () => {
  const [city, setCity] = useState<string>('')
  const { data, error, isLoading } = useWeather(city)
  const { control, handleSubmit, setValue } = useForm<{ city: string }>()

  const handleSearch = (data: { city: string }) => {
    if (data.city.trim() === '') {
      alert('Please enter a valid city name.')
      return
    }
    setCity(data.city.trim())
  }

  const handleClear = () => {
    setValue('city', '')
    setCity('')
  }

  return (
    <Box
      className="content_container"
      sx={{
        backgroundImage: 'url(/images/clearnight_large.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 2,
      }}
    >
      <Box
        sx={{
          maxWidth: '800px',
          width: '100%',
          backgroundColor: '#fff',
          backdropFilter: 'blur(10px)',
          borderRadius: '16px',
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
          padding: '2rem',
          textAlign: 'center',
        }}
      >
        <Typography
          sx={{
            fontSize: '3rem',
            fontWeight: 'bold',
            color: '#15173e',
            marginBottom: '2.5rem',
          }}
        >
          {LABELS.WEATHER_PAGE.TITLE}
        </Typography>

        <Box
          component="form"
          onSubmit={handleSubmit(handleSearch)}
          sx={{
            display: 'flex',
            gap: 2,
            justifyContent: 'center',
            marginBottom: '2rem',
          }}
        >
          <Controller
            name="city"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <InputField
                label={LABELS.WEATHER_PAGE.SEARCH_PLACEHOLDER}
                placeholder={LABELS.WEATHER_PAGE.CITY}
                value={field.value}
                onChange={field.onChange}
                onClear={handleClear}
              />
            )}
          />
          <SearchButton label={LABELS.WEATHER_PAGE.SEARCH_BUTTON} />
        </Box>

        {isLoading && (
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <CircularProgress />
          </Box>
        )}
        {error && <ErrorComponent message={error.message} severity="error" />}
        {data && <WeatherCard data={data} />}
      </Box>
    </Box>
  )
}

export default WeatherPage
