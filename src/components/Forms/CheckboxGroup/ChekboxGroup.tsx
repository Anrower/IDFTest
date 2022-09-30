import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { HobbyCheked, initHobby, updateHobby } from '../../../store/slices/userInfoSlice';
import { useAppDispatch } from '../../../hooks/redux';

interface IProps {
  groupName: string
  items: string[]
  required: boolean
  selectOptions: HobbyCheked
  error: boolean
}

interface ICheckBox {
  [key: string]: boolean
}

export default function CheckboxGroup(props: IProps) {

  const dispatch = useAppDispatch();
  const { items, required, groupName, selectOptions, error } = props;

  const memoizedValue = React.useMemo(() => {
    const obj: ICheckBox = {};
    for (const key of items) {
      obj[key] = false;
    }
    dispatch(initHobby(obj))
  }, [items, dispatch]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.name)
    dispatch(updateHobby({ ...selectOptions, [e.target.name]: e.target.checked }))
  };

  const getChecked = (item: string, selectOption: HobbyCheked): boolean => {
    return selectOption[item];
  }

  return (
    <FormControl
      required={required}
      error={error}
    >
      <FormLabel id="chek-box-group">{groupName}</FormLabel>
      <FormGroup
        aria-labelledby="chek-box-group"
      >
        {items.map((item) => (
          <FormControlLabel
            key={item}
            control={
              <Checkbox
                name={item}
                checked={getChecked(item, selectOptions)}
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

