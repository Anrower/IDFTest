import CheckboxGroup from '../CheckboxGroup/ChekboxGroup';
import styles from '../Form.module.scss';
import RadioButtonsGroup from '../RadioButtonsGroup/RadioButtonsGroup';
import SelectInput from '../SelectInput/SelectInput';
import TextInput from '../TextInput/TextInput';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { useEffect } from 'react';
import { backPreviousCrumb, pickUpCrumbs, throwCrumbs } from '../../../store/slices/breadCrumbsSlice';
import { IBirthday, IHobby, IOcean, IRequired, ITextInputData } from '../../../models/Idata';
import NumberInputGroup from '../NumberInputGroup/NumberInputGroup';

interface IProps {
  dataFirstName: ITextInputData
  dataLastName: ITextInputData
  dataBirthday: IBirthday
  dataOcean: IOcean
  dataHobby: IHobby
  dataSex: IRequired
}

const PersonalInfoForm = (props: IProps) => {
  const {
    dataFirstName,
    dataLastName,
    dataBirthday,
    dataHobby,
    dataOcean,
    dataSex
  } = props
  const {
    firstName,
    lastName,
    birthday,
    hobby,
    favoriteOcean,
    sex
  } = useAppSelector(state => state.userInfoReducer);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(throwCrumbs('Personal Info'));
  }, [dispatch])

  const handlePreviousStep = () => {
    dispatch(pickUpCrumbs())
    dispatch(backPreviousCrumb());
  }

  return (
    <form className={styles.form}>
      <TextInput
        label="First Name"
        required={dataFirstName.required}
        defaultValue={firstName}
        type={'text'}
      />

      <TextInput
        label="Last Name"
        required={dataLastName.required}
        defaultValue={lastName}
        type={'text'}
      />

      <RadioButtonsGroup
        groupName={'Sex'}
        defaultValue={sex}
        required={dataSex.required}
        value={sex}
      />

      <NumberInputGroup
        groupName='Birthday'
        required={dataBirthday.required}
        birthday={birthday}
      />

      <SelectInput
        groupName={'Your Favorite Ocean'}
        items={dataOcean.oneOf}
        required={dataOcean.required}
        selectOption={favoriteOcean}
      />

      <CheckboxGroup
        groupName={'Hobby'}
        items={dataHobby.anyOf}
        required={dataHobby.required}
        selectOptions={hobby}
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
          onClick={handlePreviousStep}
        >
          Change SignUp Information
        </Button>
        <Button
          type={'submit'}
          sx={{ width: '45%' }}
          color="primary"
          variant="contained"
        >
          Complete
        </Button>
      </Stack>
    </form>
  )
}

export default PersonalInfoForm