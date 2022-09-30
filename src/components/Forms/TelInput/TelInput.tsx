import {
  MuiTelInput,
} from 'mui-tel-input'
import { useAppDispatch } from '../../../hooks/redux'
import { updateTel } from '../../../store/slices/userInfoSlice'

interface IProps {
  value: string
  required: boolean
  size?: 'small' | 'medium'
  error: boolean
}

const TelInput = (props: IProps) => {
  const dispatch = useAppDispatch();

  const handleChange = (newValue: string) => {
    dispatch(updateTel(newValue))
  }

  return (
    <MuiTelInput
      sx={{ width: '100%' }}
      label="Phone"
      onChange={handleChange}
      {...props}
    />
  )
}

export default TelInput;