import { useNavigate } from 'react-router-dom';
import styles from './HeaderBarLogo.module.css';

const HeaderBarLogo = () => {
  const navigate = useNavigate();
  return (
    <div className={styles['container']} onClick={() => navigate('/home')}>
      <div className=" flex-shrink-0 ">
        <img
          className="h-8 w-8 "
          src="https://seeklogo.com/images/F/forever-logo-93E476442D-seeklogo.com.png"
          alt="Forever Company"
        />
      </div>
    </div>
  );
};

export default HeaderBarLogo;
