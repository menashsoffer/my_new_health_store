import styles from './Images.module.css';

/* eslint-disable-next-line */
export interface ImagesProps {
  id: number;
  src: string;
  className: string;
}

const Images = (props: ImagesProps) => {
  return (
    <div className={styles['container']}>
      <div className={props.className}>
        <img
          src={props.src}
          alt=""
          className="h-full w-full object-cover object-center"
        />
      </div>
    </div>
  );
};

export default Images;
