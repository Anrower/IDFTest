import PasswordInput from '../PasswordInput/PasswordInput';
import TelInput from '../TelInput/TelInput';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Button from '@mui/material/Button';
import styles from '../Form.module.scss';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import TextInput from '../TextInput/TextInput';
import { IRegExp, ITextInputData } from '../../../models/Idata';
import { checkMinMax, checkRegExp } from '../../../helpers/validations';
import { useEffect, useState } from 'react';
import { throwCrumbs, updateShowActiveCrumb } from '../../../store/slices/breadCrumbsSlice';
import { screenInnerWidth } from '../../../helpers/consts';
import { useBtnSize, useFieldSize, useInputLabelSize } from '../../../hooks/useSize';

interface IProps {
  readonly dataEmail: IRegExp
  readonly dataPassword: ITextInputData
  readonly dataMobilePhone: IRegExp
}

const SignUpInfoForm = (props: IProps) => {

  const [telError, setTelError] = useState<boolean>(false);
  const [emailError, setEmailEror] = useState<boolean>(false);
  const [passwordError, setPasswordEror] = useState<boolean>(false);

  const btnSize = useBtnSize(screenInnerWidth);
  const fieldSize = useFieldSize(screenInnerWidth);
  const inputLabelSize = useInputLabelSize(screenInnerWidth);
  const dispatch = useAppDispatch();
  const { dataEmail, dataPassword, dataMobilePhone } = props;
  const {
    tel,
    email,
    password,
    confirmPassword
  } = useAppSelector(state => state.userInfoReducer);

  useEffect(() => {
    dispatch(throwCrumbs('Sign Up Info'));
  }, [dispatch]);

  const handleNextStep = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {

    setTelError(false);
    setEmailEror(false);
    setPasswordEror(false);

    const isPasswordRightLength = checkMinMax(
      password, dataPassword.minLength, dataPassword.maxLength
    );
    const isPasswordSame = password === confirmPassword;
    setPasswordEror(!isPasswordSame || !isPasswordRightLength);

    const removeTelSpaces = tel.split(' ').join('');
    const isTelRegTest = checkRegExp(removeTelSpaces, dataMobilePhone.regExp);
    setTelError(!isTelRegTest);

    const isEmailRegTest = checkRegExp(email, dataEmail.regExp);
    setEmailEror(!isEmailRegTest);

    if (isPasswordSame && isTelRegTest && isEmailRegTest && isPasswordRightLength) {
      e.preventDefault();
      dispatch(updateShowActiveCrumb(1));
    } else {
      e.preventDefault();
      return
    }
  }

  return (
    <form className={styles.form}>
      <TelInput
        value={tel}
        required={dataMobilePhone.required}
        size={fieldSize}
        error={telError}
      />

      <TextInput
        label="Email"
        type={'email'}
        defaultValue={email}
        required={dataEmail.required}
        size={fieldSize}
        error={emailError}
      />

      <PasswordInput
        label="Password"
        value={password}
        required={dataPassword.required}
        size={fieldSize}
        inputlabelsize={inputLabelSize}
        error={passwordError}
      />
      <PasswordInput
        label="Confirm Password"
        value={confirmPassword}
        required={dataPassword.required}
        size={fieldSize}
        inputlabelsize={inputLabelSize}
        error={passwordError}
      />

      <Button
        sx={{
          alignSelf: 'flex-end',
          width: '45%'
        }}
        variant="contained"
        color="primary"
        onClick={(e) => handleNextStep(e)}
        endIcon={<NavigateNextIcon />}
        type={'submit'}
        size={btnSize}
      >
        Next Step
      </Button>
    </form>
  )
}

export default SignUpInfoForm