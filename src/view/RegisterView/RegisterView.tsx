import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs';
import PersonalInfoForm from '../../components/Forms/PersonalInfoForm/PersonalInfoForm';
import SignUpInfoForm from '../../components/Forms/SignUpInfoForm/SignUpInfoForm';
import styles from './RegisterView.module.scss';
import data from '../../JsonShema.json';
import { IData } from '../../models/Idata';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { useEffect, useMemo } from 'react';
import { initHobby } from '../../store/slices/userInfoSlice';

const RegisterView = () => {

  const dispatch = useAppDispatch();
  const {
    email,
    password,
    mobilePhone,
    firstName,
    lastName,
    birthday,
    ocean,
    hobby,
    sex,
  } = data as IData;
  const { showActiveCrumb } = useAppSelector(state => state.breadCrumbsReducer);

  const memoizedHobby = useMemo(() => {
    return hobby.anyOf.reduce((accumulator, value) => {
      return { ...accumulator, [value]: false };
    }, {});
  }, [hobby.anyOf]);

  useEffect(() => {
    if (data) {
      dispatch(initHobby(memoizedHobby))
    }
  }, [dispatch, memoizedHobby])

  return (
    <div className={styles.container}>
      <BreadCrumbs />
      <div className={styles.form}>
        {showActiveCrumb === 0 ?
          <SignUpInfoForm
            dataEmail={email}
            dataPassword={password}
            dataMobilePhone={mobilePhone}
          /> :
          (showActiveCrumb === 1) ?
            <PersonalInfoForm
              dataFirstName={firstName}
              dataLastName={lastName}
              dataBirthday={birthday}
              dataOcean={ocean}
              dataHobby={hobby}
              dataSex={sex}
            /> :
            null
        }
      </div>
    </div>
  )
}

export default RegisterView