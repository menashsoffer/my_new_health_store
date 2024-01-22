import styles from './Footer.module.css';

enum Step {
  START = 0,
  FINISH = 1,
}
/* eslint-disable-next-line */
export interface FooterProps {
  finishAddress: string;
  startAddress: string;
  step: Step;
}

export function Footer(props: FooterProps) {
  return (
    <div className={styles['container']}>
      <div className="mx-0 mt-0 mb-3 p-1 w-100 jumbotron shadow bg-slate-500">
        <p>
          <strong>
            Select {props.step === Step.START ? 'START' : 'FINISH'} point
          </strong>
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
