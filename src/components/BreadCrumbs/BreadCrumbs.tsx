import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { pickSelectCrumb } from '../../store/slices/breadCrumbsSlice';
import styles from './BreadCrumbs.module.scss';

const BreadCrumbs = () => {
  const dispatch = useAppDispatch();
  const { crumbs, showActiveCrumb } = useAppSelector(state => state.breadCrumbsReducer)

  return (
    <div className={styles.container}>
      {crumbs.map((crumb, index) => (
        <div
          key={crumb}
          className={index === showActiveCrumb ? styles.active : undefined}
          onClick={() => dispatch(pickSelectCrumb(crumb))}
        >
          {crumb}
        </div>
      ))}
    </div>
  )
}

export default BreadCrumbs
