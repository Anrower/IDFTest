import styles from './App.module.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <Main />
      <Footer />
    </div >
  )
}

export default App