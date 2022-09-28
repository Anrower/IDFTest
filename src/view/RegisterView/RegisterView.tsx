import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs';
import PersonalInfoForm from '../../components/Forms/PersonalInfoForm/PersonalInfoForm';
import SignUpInfoForm from '../../components/Forms/SignUpInfoForm/SignUpInfoForm';
import styles from './RegisterView.module.scss';
import data from '../../JsonShema.json';
import { IData } from '../../models/Idata';


const RegisterView = () => {
  const { email, password, mobilePhone } = data as IData;
  return (
    <div className={styles.container}>
      <h2 className={styles.form_title}>form title</h2>
      <BreadCrumbs />
      <div className={styles.form}>
        <SignUpInfoForm
          dataEmail={email}
          dataPassword={password}
          dataMobilePhone={mobilePhone}
        />

        <PersonalInfoForm />
      </div>

    </div>
  )
}

export default RegisterView