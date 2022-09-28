import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

interface IProps {
  groupName: string
  defaultValue: string | null
  values: string[];
}

export default function RadioButtonsGroup(props: IProps) {
  const { groupName, defaultValue, values } = props;

  return (
    <FormControl>
      <FormLabel id="radio-buttons-group-label">{groupName}</FormLabel>
      <RadioGroup
        aria-labelledby="radio-buttons-group-label"
        defaultValue={defaultValue}
        name="radio-buttons-group"
        sx={{
          flexDirection: 'row',
          gap: 1,
        }}
      >
        {values.map((value) => (
          <FormControlLabel
            key={value}
            value={value}
            control={<Radio />}
            label={value}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}
