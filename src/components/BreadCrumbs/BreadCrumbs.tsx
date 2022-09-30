import { useAppSelector } from '../../hooks/redux';
import styles from './BreadCrumbs.module.scss';

const BreadCrumbs = () => {
  const { crumbs, showActiveCrumb } = useAppSelector(state => state.breadCrumbsReducer)

  return (
    <div className={styles.container}>
      {crumbs.map((crumb, index) => (
        <div
          key={crumb}
          className={index === showActiveCrumb ? styles.active : undefined}
        >
          {crumb}
        </div>
      ))}
    </div>
  )
}

export default BreadCrumbs