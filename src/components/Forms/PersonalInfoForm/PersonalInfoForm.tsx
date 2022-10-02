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
import { calculateAge, checkDayAtFebruary, checkMinMax, isRequired, isSelect } from '../../../helpers/validations';
import UserInfoModal from '../../UserInfoModal/UserInfoModal';
import { toggleUserInfoModal } from '../../../store/slices/userInfoModalSlice';
import { screenInnerWidth } from '../../../helpers/consts';
import { useBtnSize, useFieldSize, useInputLabelSize } from '../../../hooks/useSize';
import { getObjectValuesToString } from '../../../helpers/getObjectValueToStirng';

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
    dataSex,
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
  const btnSize = useBtnSize(screenInnerWidth);
  const fieldSize = useFieldSize(screenInnerWidth);
  const inputlabelsize = useInputLabelSize(screenInnerWidth);

  const [firstNameError, setFirstNameError] = useState<boolean>(false);
  const [lastNameError, setLastNameError] = useState<boolean>(false);
  const [sexError, setSexError] = useState<boolean>(false);
  const [birthdayError, setBirthdayError] = useState<boolean>(false);
  const [favoriteOceanEror, setFavoriteOceanError] = useState<boolean>(false);
  const [hobbyError, setHobbyError] = useState<boolean>(false);


  useEffect(() => {
    dispatch(throwCrumbs('Personal Info'));
  }, [dispatch])

  const handlePreviousStep = () => {
    dispatch(pickUpCrumbs())
    dispatch(backPreviousCrumb());
  }

  const handleComplete = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setFirstNameError(false);
    setLastNameError(false);
    setSexError(false);
    setBirthdayError(false);
    setFavoriteOceanError(false);
    setHobbyError(false);

    const isFirstNameRightLength = checkMinMax(
      firstName, dataFirstName.minLength, dataFirstName.maxLength
    );
    setFirstNameError(!isFirstNameRightLength);

    const isLastNameRightLength = checkMinMax(
      lastName, dataLastName.minLength, dataLastName.maxLength
    );
    setLastNameError(!isLastNameRightLength);

    const getAge = calculateAge(
      birthday.year, birthday.month, birthday.day
    );
    const isValidFebruary = checkDayAtFebruary(
      Number(birthday.day), birthday.month, Number(birthday.year)
    );
    const isValidAge = checkMinMax(
      getAge, dataBirthday.minAge, dataBirthday.maxAge
    );
    setBirthdayError(!isValidAge || !isValidFebruary);

    const isValidSex = isRequired(sex);
    setSexError(!isValidSex)

    const isValidFavoriteOcean = isRequired(favoriteOcean);
    setFavoriteOceanError(!isValidFavoriteOcean);

    const isSelectHobbies = isSelect(hobby);
    const stringHobbies = getObjectValuesToString(hobby)
    const isValidHobbies = isRequired(stringHobbies);

    setHobbyError(!isValidHobbies);
    setHobbyError(!isSelectHobbies);

    if (isFirstNameRightLength &&
      isLastNameRightLength &&
      isValidAge &&
      isValidFebruary &&
      isValidSex &&
      isValidFavoriteOcean &&
      isSelectHobbies &&
      isValidHobbies
    ) {
      e.preventDefault();
      dispatch(toggleUserInfoModal());
    } else {
      e.preventDefault();
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
        size={fieldSize}
        error={firstNameError}
      />

      <TextInput
        label="Last Name"
        required={dataLastName.required}
        defaultValue={lastName}
        type={'text'}
        size={fieldSize}
        error={lastNameError}
      />

      <RadioButtonsGroup
        groupName={'Sex'}
        defaultValue={sex}
        required={dataSex.required}
        value={sex}
        error={sexError}
      />

      <NumberInputGroup
        error={birthdayError}
        groupName='Birthday'
        required={dataBirthday.required}
        birthday={birthday}
        size={fieldSize}
      />

      <SelectInput
        groupName={'Your Favorite Ocean'}
        items={dataOcean.oneOf}
        required={dataOcean.required}
        selectOption={favoriteOcean}
        size={fieldSize}
        inputlabelsize={inputlabelsize}
        error={favoriteOceanEror}
      />

      <CheckboxGroup
        groupName={'Hobby'}
        items={dataHobby.anyOf}
        required={dataHobby.required}
        error={hobbyError}
      />

      <Stack
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          // gap: 4
        }}
      >
        <Button
          variant="outlined"
          color="primary"
          onClick={handlePreviousStep}
          size={btnSize}
        >
          Change Sign Up Info
        </Button>
        <Button
          type={'submit'}
          color="primary"
          variant="contained"
          onClick={(e) => handleComplete(e)}
          size={btnSize}
        >
          Complete
        </Button>
      </Stack>
      <UserInfoModal isOpen={isOpen} />
    </form>
  )
}

export default PersonalInfoForm