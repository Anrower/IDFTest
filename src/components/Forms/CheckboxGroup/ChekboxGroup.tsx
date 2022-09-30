import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { HobbyCheked, updateHobby } from '../../../store/slices/userInfoSlice';
import { useAppDispatch } from '../../../hooks/redux';

interface IProps {
  groupName: string
  items: string[]
  required: boolean
  selectOptions: HobbyCheked
}

interface Istate {
  [key: string]: boolean;
}

export default function CheckboxGroup(props: IProps) {

  const dispatch = useAppDispatch();
  const { items, required, groupName, selectOptions } = props;

  const handleChange = (e: React.SyntheticEvent<Element, Event>, label: string) => {
    const isChecked = (e as React.ChangeEvent<HTMLInputElement>).target.checked;
    dispatch(updateHobby({ ...selectOptions, [label]: isChecked }))
  };

  const getChecked = (item: string, selectOption: HobbyCheked): boolean => {
    console.log(selectOption[item]);
    return selectOption[item];
  }

  return (
    <FormControl required={required}>
      <FormLabel id="chek-box-group">{groupName}</FormLabel>
      <FormGroup
        aria-labelledby="chek-box-group"
      >
        {items.map((item, index) => (
          <FormControlLabel
            key={item}
            onChange={(e) => handleChange(e, item)}
            control={
              <Checkbox checked={getChecked(item, selectOptions)} />
            }
            label={item}
          />
        ))}


      </FormGroup>
    </FormControl>

  );
}

