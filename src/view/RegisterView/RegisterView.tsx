import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs';
import PersonalInfoForm from '../../components/Forms/PersonalInfoForm/PersonalInfoForm';
import SignUpInfoForm from '../../components/Forms/SignUpInfoForm/SignUpInfoForm';
import styles from './RegisterView.module.scss';
import data from '../../JsonShema.json';
import { IData } from '../../models/Idata';
import { useAppSelector } from '../../hooks/redux';

const RegisterView = () => {

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