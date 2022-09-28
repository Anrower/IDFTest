import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface IProps {
  groupName: string
  items: string[]
}

export default function SelectInput(props: IProps) {
  const { groupName, items } = props;
  const [selectOption, setSelectOption] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setSelectOption(event.target.value as string);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{groupName}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectOption}
          label={groupName}
          onChange={handleChange}
        >
          {items.map((item) => (
            <MenuItem key={item} value={item}>{item}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}