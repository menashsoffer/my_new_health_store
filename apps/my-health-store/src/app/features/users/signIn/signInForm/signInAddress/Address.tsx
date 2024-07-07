import styles from './Address.module.css';
import SignInCity from './signInCity/SignInCity';
import SignInPostalCode from './signInPostalCode/SignInPostalCode';
import SignInStreet from './signInStreet/SignInStreet';

const address = 'פרטי מגורים';

const Address = () => {
  return (
    <div className={styles['container']}>
      <p className=" mt-10 text-center text-xl font-bold leading-9 tracking-tight text-gray-900">
        {address}
      </p>
      <div className="mt-2 flex space-x-1" id="addressDiv" dir="rtl">
        <SignInCity />
        <SignInStreet />
      </div>
      <div className="mt-2 " id="addressDiv" dir="rtl">
        <SignInPostalCode />
      </div>
    </div>
  );
};

export default Address;
