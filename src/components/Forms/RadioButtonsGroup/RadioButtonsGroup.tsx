import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useDispatch } from 'react-redux';
import { useAppDispatch } from '../../../hooks/redux';
import { updateSex } from '../../../store/slices/userInfoSlice';
import { FormHelperText } from '@mui/material';

interface IProps {
  groupName: string
  defaultValue: string | null
  required: boolean
  value: string;
}

export default function RadioButtonsGroup(props: IProps) {
  const dispatch = useAppDispatch()
  const { groupName, defaultValue, value, required } = props;
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState(`Chose ${groupName}`);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateSex((event.target as HTMLInputElement).value));
  };

  return (
    <FormControl required={required}>
      <FormLabel id="radio-buttons-group-label">{groupName}</FormLabel>
      <RadioGroup
        aria-labelledby="radio-buttons-group-label"
        defaultValue={defaultValue}
        name="radio-buttons-group"
        value={value}
        onChange={handleChange}
        sx={{
          flexDirection: 'row',
          gap: 1,
        }}
      >
        <FormControlLabel
          value="female"
          control={<Radio />}
          label="Female"
        />

        <FormControlLabel
          value="male"
          control={<Radio />}
          label="Male"
        />

        <FormHelperText>{helperText}</FormHelperText>
      </RadioGroup>
    </FormControl>
  );
}
