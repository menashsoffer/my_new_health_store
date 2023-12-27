import React, { ReactNode } from 'react';
import styles from './main.module.css';

/* eslint-disable-next-line */
export interface MainProps {children: ReactNode;}

const Main: React.FC<MainProps> = ({children}) =>  {
  return (
    <div className={styles['container']}>
      {children}
    </div>
  );
}

export default Main;
