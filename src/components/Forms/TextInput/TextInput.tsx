import * as React from 'react';
import TextField from '@mui/material/TextField';
import { useAppDispatch } from '../../../hooks/redux';
import { InputBaseComponentProps } from '@mui/material';
import { updateBirthdayDay, updateBirthdayMonth, updateBirthdayYear, updateEmail, updateFistName, updateLastName } from '../../../store/slices/userInfoSlice'

interface IProps {
  label: 'Email' | 'First Name' | 'Last Name' | 'Day' | 'Month' | 'Year'
  required: boolean
  error: boolean
  defaultValue?: string
  type: React.InputHTMLAttributes<unknown>['type']
  width?: string
  inputProps?: InputBaseComponentProps
  size?: 'small' | 'medium'
}

export default function TextInput(props: IProps) {
  const dispatch = useAppDispatch();
  const { label, required, defaultValue, type, width, inputProps, size, error } = props;

  const handleChange =
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      switch (label) {
        case 'Email':
          dispatch(updateEmail(event.target.value));
          break
        case 'First Name':
          dispatch(updateFistName(event.target.value));
          break
        case 'Last Name':
          dispatch(updateLastName(event.target.value));
          break
        case 'Day':
          let day = event.target.value;
          day.length === 1 ? day = '0' + day : day = day;
          dispatch(updateBirthdayDay(day));
          break
        case 'Month':
          let month = event.target.value;
          month.length === 1 ? month = '0' + month : month = month;
          dispatch(updateBirthdayMonth(month));
          break
        case 'Year':
          dispatch(updateBirthdayYear(event.target.value));
          break
        default:
          return;
      }
    };

  return (
    <TextField
      sx={width ? { width: width } : { width: '100%' }}
      label={label}
      variant="outlined"
      defaultValue={defaultValue}
      type={type}
      required={required}
      onChange={(e) => handleChange(e)}
      inputProps={inputProps}
      size={size}
      error={error}
      helperText={error ? 'Incorrect entry.' : null}
    />
  );
}