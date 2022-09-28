import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs';
import PersonalInfoForm from '../../components/Forms/PersonalInfoForm/PersonalInfoForm';
import SignUpInfoForm from '../../components/Forms/SignUpInfoForm/SignUpInfoForm';
import styles from './RegisterView.module.scss';


const RegisterView = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.form_title}>form title</h2>
      <BreadCrumbs />
      <div className={styles.form}>
        <SignUpInfoForm />
        <PersonalInfoForm />
      </div>

    </div>
  )
}

export default RegisterView