import styles from './HeaderBarLogo.module.css';

/* eslint-disable-next-line */
export interface HeaderBarLogoProps {}

export function HeaderBarLogo(props: HeaderBarLogoProps) {
  return (
    <div className={styles['container']}>
      <div className=" flex-shrink-0 ">
        <img
          className="h-8 w-8 "
          src="https://seeklogo.com/images/F/forever-logo-93E476442D-seeklogo.com.png"
          alt="Forever Company"
        />
      </div>
    </div>
  );
}

export default HeaderBarLogo;
