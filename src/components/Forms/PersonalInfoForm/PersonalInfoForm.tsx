import CheckboxGroup from '../CheckboxGroup/ChekboxGroup';
import styles from '../Form.module.scss';
import RadioButtonsGroup from '../RadioButtonsGroup/RadioButtonsGroup';
import SelectInput from '../SelectInput/SelectInput';
import TextInput from '../TextInput/TextInput';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const PersonalInfoForm = () => {
  return (
    <div className={styles.form}>
      {/* <TextInput
        label="First Name"
      />

      <TextInput
        label="Last Name"
      /> */}
      <RadioButtonsGroup
        groupName={'Sex'}
        defaultValue={null}
        values={['Male', 'Female']}
      />

      <SelectInput
        groupName={'Your Favorite Ocean'}
        items={[
          "Atlantic",
          "Pacific",
          "Indian",
          "Arctic"
        ]}
      />

      <CheckboxGroup
        items={[
          "Sport",
          "Beauty",
          "IT",
          "Pets"
        ]}
      />

      <Stack
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          gap: 2
        }}
      >
        <Button
          sx={{ width: '45%' }}
          variant="outlined"
          color="primary"
        >
          Change SignUp Information
        </Button>
        <Button
          sx={{ width: '45%' }}
          color="primary"
          variant="contained"
        >
          Complete
        </Button>
      </Stack>
    </div>
  )
}

export default PersonalInfoForm