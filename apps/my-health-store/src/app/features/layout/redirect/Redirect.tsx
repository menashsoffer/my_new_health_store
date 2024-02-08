import { Navigate } from 'react-router-dom';
import styles from './Redirect.module.css';

export function Redirect() {
  return (
    <div className={styles['container']}>
      <Navigate to={'/home'} />
    </div>
  );
}

export default Redirect;
