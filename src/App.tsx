import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import WeatherPage from './pages/weather'

function App() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <WeatherPage />
    </QueryClientProvider>
  )
}

export default App
