import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { updateHobby } from '../../../store/slices/userInfoSlice';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { FormHelperText } from '@mui/material';

interface IProps {
  groupName: string
  items: string[]
  required: boolean
  error: boolean
}

export default function CheckboxGroup(props: IProps) {

  const hobby = useAppSelector(state => state.userInfoReducer.hobby)
  const dispatch = useAppDispatch();
  const { items, required, groupName, error } = props;
  const warningMessage = `Please Select ${groupName}`;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateHobby({ [e.target.name]: e.target.checked }))
  };

  return (
    <FormControl
      required={required}
      error={error}
    >
      <FormLabel id="chek-box-group">{groupName}</FormLabel>
      <FormGroup
        aria-labelledby="chek-box-group"
      >
        <FormHelperText
          children={error ? warningMessage : undefined}
        />
        {items.map((item) => (
          <FormControlLabel
            key={item}
            control={
              <Checkbox
                name={item}
                checked={hobby[item]}
                onChange={(e) => handleChange(e)}
              />
            }
            label={item}
          />
        ))}


      </FormGroup>
    </FormControl>

  );
}

