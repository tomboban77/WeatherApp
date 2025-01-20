import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import WeatherPage from './pages/weather'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<WeatherPage />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  )
}

export default App
