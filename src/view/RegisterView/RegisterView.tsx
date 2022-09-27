import styles from './RegisterView.module.scss';

const arr = ['hello', 'ted', 'red', 'had'];

const RegisterView = () => {
  return (
    <div className={styles.register_view}>
      <div className={styles.progress_bar}>
        {arr.map((element) => (
          <div>{element}</div>
        ))}
      </div>
    </div>
  )
}

export default RegisterView