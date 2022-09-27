import RegisterView from '../../view/RegisterView/RegisterView';
import styles from './Main.module.scss';

const Main = () => {
  return (
    <main className={styles.main}>
      <RegisterView />
    </main>
  )
}

export default Main