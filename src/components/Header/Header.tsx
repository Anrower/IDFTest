import styles from './Header.module.scss';
import logo from '../../assets/svg/logo.svg';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo__wrapper}>
        <img src={logo} alt="Logo" />
      </div>
    </header>
  )
}

export default Header