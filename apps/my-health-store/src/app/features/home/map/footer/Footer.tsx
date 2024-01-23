import styles from './Footer.module.css';

/* eslint-disable-next-line */
export interface FooterProps {
  finishAddress: string;
  startAddress: string;
}

export function Footer(props: FooterProps) {
  return (
    <div className={styles['container']}>
      <div className="mx-0 mt-0 mb-3 p-1 w-100 jumbotron shadow bg-slate-500">
        <p>
          <strong>Select A store point</strong>
        </p>
        <div className="d-flex mt-2 justify-content-between ">
          {props.startAddress.length == 0 ? null : (
            <div>
              <strong>From: </strong>
              <em>{props.startAddress}</em>
            </div>
          )}
          {props.finishAddress.length == 0 ? null : (
            <div>
              <strong>To: </strong>
              <em>{props.finishAddress}</em>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Footer;
