import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormLabel from '@mui/material/FormLabel';
import TextInput from '../TextInput/TextInput';
import { Box } from '@mui/system';
import { BirthdayDate } from '../../../store/slices/userInfoSlice';

interface IProps {
  groupName: string
  required: boolean
  birthday: BirthdayDate
}

export default function NumberInputGroup(props: IProps) {
  const { required, groupName, birthday } = props;
  const { day, month, year } = birthday;

  const getYear = () => {
    return new Date().getFullYear();
  }

  return (
    <Box
      sx={{ width: '100%' }}
    >
      <FormLabel id="number-input-group">{groupName}</FormLabel>
      <FormGroup
        aria-labelledby="number-input-group"
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
            width={'20%'}
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
            width={'20%'}
            inputProps={{
              min: 1,
              max: 12,
            }}
          />

          <TextInput
            label="Year"
            defaultValue={year}
            required={required}
            type={'number'}
            width={'30%'}
            inputProps={{
              min: 1900,
              max: getYear(),
            }}
          />
        </Box>
      </FormGroup>
    </Box>
  );
}
