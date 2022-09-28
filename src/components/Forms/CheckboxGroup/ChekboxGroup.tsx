import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

interface IProps {
  items: string[]
}

export default function CheckboxGroup(props: IProps) {
  const { items } = props;

  return (
    <FormControl>
      <FormLabel id="chek-box-group">Hobbies</FormLabel>
      <FormGroup
        aria-labelledby="chek-box-group"
      >
        {items.map((item) => (
          <FormControlLabel
            key={item}
            control={<Checkbox />}
            label={item}
          />
        ))}
      </FormGroup>
    </FormControl>

  );
}

