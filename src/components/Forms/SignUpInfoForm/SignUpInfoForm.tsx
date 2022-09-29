import PasswordInput from '../PasswordInput/PasswordInput';
import TelInput from '../TelInput/TelInput';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Button from '@mui/material/Button';
import styles from '../Form.module.scss';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import TextInput from '../TextInput/TextInput';
import { IRegExp, ITextInputData } from '../../../models/Idata';
import { checkLength, checkRegExp } from '../../../helpers/validations';
import { useEffect } from 'react';
import { throwCrumbs, updateShowActiveCrumb } from '../../../store/slices/breadCrumbsSlice';

interface IProps {
  readonly dataEmail: IRegExp
  readonly dataPassword: ITextInputData
  readonly dataMobilePhone: IRegExp
}

const SignUpInfoForm = (props: IProps) => {

  const dispatch = useAppDispatch();
  const { dataEmail, dataPassword, dataMobilePhone } = props;
  const {
    tel,
    email,
    password,
    confirmPassword
  } = useAppSelector(state => state.signUpInfoReducer);

  useEffect(() => {
    dispatch(throwCrumbs('Sign Up Info'));
  }, [dispatch])

  const handleNextStep = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const removeTelSpaces = tel.split(' ').join('');
    const isPasswordSame = password === confirmPassword;
    const isTelRegTest = checkRegExp(removeTelSpaces, dataMobilePhone.regExp);
    const isEmailRegTest = checkRegExp(email, dataEmail.regExp);
    const isPasswordRightLength =
      checkLength(password, dataPassword.minLength, dataPassword.maxLength);

    if (isPasswordSame && isTelRegTest && isEmailRegTest && isPasswordRightLength) {
      e.preventDefault();
      alert('hello');
      dispatch(updateShowActiveCrumb(1));
    } else {
      return
    }
  }

  return (
    <form className={styles.form}>
      <TelInput
        value={tel}
        required={dataMobilePhone.required}
      />

      <TextInput
        label="Email"
        type={'email'}
        defaultValue={email}
        required={dataEmail.required}
      />

      <PasswordInput
        label="Password"
        value={password}
        required={dataPassword.required}
      />
      <PasswordInput
        label="Confirm Password"
        value={confirmPassword}
        required={dataPassword.required}
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
      >
        Next Step
      </Button>
    </form>
  )
}

export default SignUpInfoForm