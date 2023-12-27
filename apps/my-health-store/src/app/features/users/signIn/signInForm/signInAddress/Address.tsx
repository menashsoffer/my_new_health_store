import styles from './Address.module.css';
import SignInCity from './signInCity/SignInCity';
import SignInPostalCode from './signInPostalCode/SignInPostalCode';
import { SignInStreet } from './signInStreet/SignInStreet';

/* eslint-disable-next-line */
export interface AddressProps {}

export function Address(props: AddressProps) {
  return (
    <div className={styles['container']}>
      <p className=" mt-10 text-center text-xl font-bold leading-9 tracking-tight text-gray-900">
        address
      </p>
      <div className="mt-2 flex space-x-1" id="addressDiv">
        <SignInCity />
        <SignInStreet />
      </div>
      <div className="mt-2 " id="addressDiv">
        <SignInPostalCode />
      </div>
    </div>
  );
}

export default Address;
