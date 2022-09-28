import * as React from 'react';
import TextField from '@mui/material/TextField';
import { useAppDispatch } from '../../../hooks/redux';
import { updateEmail } from '../../../store/slices/signUpInfoSlice'
interface IProps {
  label: 'Email' | 'First Name' | 'Last Name'
  required: boolean
  defaultValue: string
  type: React.InputHTMLAttributes<unknown>['type']
}

export default function TextInput(props: IProps) {
  const dispatch = useAppDispatch();
  const { label, required, defaultValue, type } = props;

  const handleChange =
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      switch (label) {
        case 'Email':
          dispatch(updateEmail(event.target.value));
          break
        case 'First Name':
          alert(event.target.value);
          break
        case 'Last Name':
          alert(event.target.value);
          break
        default:
          return;
      }
    };

  return (
    <TextField
      sx={{ width: '100%' }}
      label={label}
      variant="outlined"
      defaultValue={defaultValue}
      type={type}
      required={required}
      onChange={(e) => handleChange(e)}
    />
  );
}