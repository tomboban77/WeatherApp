import React from 'react'
import Alert from '@mui/material/Alert'
import Box from '@mui/material/Box'

interface AlertMessageProps {
  severity: 'error' | 'warning' | 'info' | 'success'
  message: string
  showIcon?: boolean
  sx?: object
}

const AlertMessage: React.FC<AlertMessageProps> = ({
  severity,
  message,
  showIcon = true,
  sx = {},
}) => {
  return (
    <Box sx={{ width: '100%', ...sx }}>
      <Alert severity={severity} icon={showIcon ? undefined : false}>
        {message}
      </Alert>
    </Box>
  )
}

export default AlertMessage
