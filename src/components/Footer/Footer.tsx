import styles from './Footer.module.scss';
import logo from '../../assets/svg/logo.svg';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo__wrapper}>
        <img src={logo} alt="Logo" />
      </div>
    </footer>
  )
}

export default Footer