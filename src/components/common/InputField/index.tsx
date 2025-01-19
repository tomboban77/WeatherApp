import React from 'react'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import ClearIcon from '@mui/icons-material/Clear'

interface InputFieldProps {
  label?: string
  placeholder?: string
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  onClear: () => void
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  placeholder,
  value,
  onChange,
  onClear,
}) => {
  return (
    <TextField
      variant="outlined"
      label={label}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      fullWidth
      InputProps={{
        endAdornment: value && (
          <InputAdornment position="end">
            <IconButton onClick={onClear} edge="end">
              <ClearIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  )
}

export default InputField
