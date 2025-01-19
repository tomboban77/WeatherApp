import React from 'react'
import Box from '@mui/material/Box'
import AlertMessage from '../common/Alert'
import LABELS from 'constants/weather'

interface ErrorComponentProps {
  message: string
  severity?: 'error' | 'warning' | 'info' | 'success'
}

const ErrorComponent: React.FC<ErrorComponentProps> = ({
  message,
  severity = 'error',
}) => {
  return (
    <Box sx={{ width: '100%', marginTop: 2 }}>
      <AlertMessage
        severity={severity}
        message={message || LABELS.WEATHER_PAGE.ERROR_MESSAGE}
        sx={{ marginTop: 2 }}
      />
    </Box>
  )
}

export default ErrorComponent
