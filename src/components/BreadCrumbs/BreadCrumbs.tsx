import { useAppSelector } from '../../hooks/redux';
import styles from './BreadCrumbs.module.scss';

const BreadCrumbs = () => {
  const { crumbs: list } = useAppSelector(state => state.breadCrumbsReducer)

  return (
    <div className={styles.container}>
      {list.map((item) => (
        <div key={item}>{item}</div>
      ))}
    </div>
  )
}

export default BreadCrumbs