import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormLabel from '@mui/material/FormLabel';
import TextInput from '../TextInput/TextInput';
import { Box } from '@mui/system';
import { BirthdayDate } from '../../../store/slices/userInfoSlice';
import { FormControl } from '@mui/material';

interface IProps {
  groupName: string
  error: boolean
  required: boolean
  birthday: BirthdayDate
  size?: 'medium' | 'small'
}

export default function NumberInputGroup(props: IProps) {
  const { required, groupName, birthday, size, error } = props;
  const { day, month, year } = birthday;

  const getYear = () => {
    return new Date().getFullYear();
  }

  return (
    <Box
      sx={{ width: '100%' }}
    >
      <FormLabel
        id="number-input-group"
        required={required}
      >
        {groupName}
      </FormLabel>
      <FormControl
        error={error}
        aria-labelledby="number-input-group"
        sx={{ width: '100%' }}
      >
        <Box
          sx={{
            marginTop: 2,
            display: 'flex',
            flexWrap: 'wrap',
            gap: 2,
          }}
        >
          <TextInput
            label="Day"
            defaultValue={day}
            required={required}
            type={'number'}
            width={'25%'}
            size={size}
            error={error}
            inputProps={{
              min: 1,
              max: 31,
            }}
          />

          <TextInput
            label="Month"
            defaultValue={month}
            required={required}
            type={'number'}
            width={'25%'}
            error={error}
            size={size}
            inputProps={{
              min: 1,
              max: 12,
            }}
          />

          <TextInput
            error={error}
            label="Year"
            defaultValue={year}
            required={required}
            type={'number'}
            width={'30%'}
            size={size}
            inputProps={{
              min: 1900,
              max: getYear(),
            }}
          />
        </Box>
      </FormControl>
    </Box>
  );
}
