import React from 'react'
import {
  MuiTelInput,
  MuiTelInputCountry,
} from 'mui-tel-input'

const TelInput = () => {
  const [value, setValue] = React.useState<string>('+375');

  const handleChange = (newValue: string) => {
    console.log(newValue);
    setValue(newValue);
  }

  const onlyCountries: MuiTelInputCountry[] = ['BY']

  return (
    <MuiTelInput
      sx={{ width: '100%' }}
      label='Phone'
      value={value}
      onChange={handleChange}
      onlyCountries={onlyCountries}
    />
  )
}

export default TelInput;