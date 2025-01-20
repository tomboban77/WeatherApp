import React from 'react'
import Button, { ButtonProps } from '@mui/material/Button'
import LABELS from 'constants/weather'

interface SearchButtonProps extends ButtonProps {
  label?: string
}

const SearchButton: React.FC<SearchButtonProps> = ({
  label = LABELS.WEATHER_PAGE.SEARCH_BUTTON,
  onClick,
  type = 'submit',
  ...props
}) => {
  return (
    <Button
      type={type}
      variant="contained"
      color="primary"
      onClick={onClick}
      {...props}
      sx={{
        bgcolor: 'linear-gradient(to right, #6a11cb, #2575fc)',
        padding: '12px 24px',
        fontWeight: 'bold',
        boxShadow: '0px 4px 10px rgba(0,0,0,0.2)',
        minWidth: '160px',
        transition: 'all 0.3s',
        '&:hover': {
          transform: 'scale(1.05)',
          boxShadow: '0px 6px 12px rgba(0,0,0,0.3)',
        },
      }}
    >
      {label}
    </Button>
  )
}

export default SearchButton
