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
import { Grid2 } from '@mui/material'

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
    <Grid2
      className="content_container"
      sx={{
        backgroundImage: 'url(/images/weather_image.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
      }}
    >
      <Box
        sx={{
          maxWidth: '700px',
          margin: '0 auto',
          padding: '5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
          backgroundColor: 'white',
          boxShadow: 3,
          borderRadius: 2,
          position: 'relative',
          top: '500px',
        }}
      >
        <Typography variant="h4" component="h1" textAlign="center" gutterBottom>
          {LABELS.WEATHER_PAGE.TITLE}
        </Typography>

        <Box
          component="form"
          onSubmit={handleSubmit(handleSearch)}
          sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: 2,
            alignItems: 'center',
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
    </Grid2>
  )
}

export default WeatherPage
