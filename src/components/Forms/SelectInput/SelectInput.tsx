import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useAppDispatch } from '../../../hooks/redux';
import { updateFavoriteOcean } from '../../../store/slices/userInfoSlice';

interface IProps {
  groupName: string
  items: string[]
  required: boolean
  selectOption: string
  size?: 'small' | 'medium'
  labelSize?: 'small' | 'normal'
}

export default function SelectInput(props: IProps) {
  const dispatch = useAppDispatch();
  const { groupName, items, required, selectOption, size, labelSize } = props;

  const handleChange = (event: SelectChangeEvent) => {
    dispatch(updateFavoriteOcean(event.target.value))
  };

  return (
    <Box sx={{ width: '100%' }}>
      <FormControl
        fullWidth
        required={required}
      >
        <InputLabel
          id="demo-simple-select-label"
          size={labelSize}
        >
          {groupName}
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectOption}
          label={groupName}
          required={required}
          onChange={handleChange}
          size={size}
        >
          {items.map((item) => (
            <MenuItem key={item} value={item}>{item}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}