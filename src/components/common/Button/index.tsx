import React from 'react'
import Button, { ButtonProps } from '@mui/material/Button'

interface SearchButtonProps extends ButtonProps {
  label?: string
}

const SearchButton: React.FC<SearchButtonProps> = ({
  label = 'Search',
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
    >
      {label}
    </Button>
  )
}

export default SearchButton
