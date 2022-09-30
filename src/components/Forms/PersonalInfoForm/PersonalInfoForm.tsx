import CheckboxGroup from '../CheckboxGroup/ChekboxGroup';
import styles from '../Form.module.scss';
import RadioButtonsGroup from '../RadioButtonsGroup/RadioButtonsGroup';
import SelectInput from '../SelectInput/SelectInput';
import TextInput from '../TextInput/TextInput';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { useEffect, useState } from 'react';
import { backPreviousCrumb, pickUpCrumbs, throwCrumbs } from '../../../store/slices/breadCrumbsSlice';
import { IBirthday, IHobby, IOcean, IRequired, ITextInputData } from '../../../models/Idata';
import NumberInputGroup from '../NumberInputGroup/NumberInputGroup';
import { calculateAge, checkMinMax, isRequired } from '../../../helpers/validations';
import UserInfoModal from '../../UserInfoModal/UserInfoModal';
import { toggleUserInfoModal } from '../../../store/slices/userInfoModalSlice';

interface IProps {
  readonly dataFirstName: ITextInputData
  readonly dataLastName: ITextInputData
  readonly dataBirthday: IBirthday
  readonly dataOcean: IOcean
  readonly dataHobby: IHobby
  readonly dataSex: IRequired
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

  const { isOpen } = useAppSelector(state => state.userInfoModalReducer)
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(throwCrumbs('Personal Info'));
  }, [dispatch])

  const handlePreviousStep = () => {
    dispatch(pickUpCrumbs())
    dispatch(backPreviousCrumb());
  }

  const handleComplete = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {

    const isFirstNameRightLength = checkMinMax(
      firstName, dataFirstName.minLength, dataFirstName.maxLength
    );
    const isLastNameRightLength = checkMinMax(
      lastName, dataLastName.minLength, dataLastName.maxLength
    );
    const getAge = calculateAge(
      birthday.year, birthday.month, birthday.day
    );
    const isValidAge = checkMinMax(
      getAge, dataBirthday.minAge, dataBirthday.maxAge
    );
    const isValidSex = isRequired(sex);
    const isValidFavoriteOcean = isRequired(favoriteOcean);
    // const selectHobbyList = hobby.forEach(el => el === true);
    console.log(hobby);

    if (isFirstNameRightLength &&
      isLastNameRightLength &&
      isValidAge &&
      isValidSex &&
      isValidFavoriteOcean
    ) {
      e.preventDefault();
      dispatch(toggleUserInfoModal());
    } else {
      return
    }

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
          variant="outlined"
          color="primary"
          onClick={handlePreviousStep}
          size={'large'}
        >
          Change Sign Up Information
        </Button>
        <Button
          type={'submit'}
          color="primary"
          variant="contained"
          onClick={(e) => handleComplete(e)}
          size={'large'}
        >
          Complete
        </Button>
      </Stack>
      <UserInfoModal isOpen={isOpen} />
    </form>
  )
}

export default PersonalInfoForm