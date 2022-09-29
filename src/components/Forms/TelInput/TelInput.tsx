import React from 'react'
import {
  MuiTelInput,
  MuiTelInputCountry,
} from 'mui-tel-input'
import { useAppDispatch } from '../../../hooks/redux'
import { updateTel } from '../../../store/slices/userInfoSlice'

interface IProps {
  value: string
  required: boolean
}

const TelInput = (props: IProps) => {
  const dispatch = useAppDispatch();
  // const { value, required } = props

  const handleChange = (newValue: string) => {
    dispatch(updateTel(newValue))
  }

  // const onlyCountries: MuiTelInputCountry[] = ['BY']

  return (
    <MuiTelInput
      sx={{ width: '100%' }}
      label="Phone"
      onChange={handleChange}
      // onlyCountries={onlyCountries}
      {...props}
    />
  )
}

export default TelInput;