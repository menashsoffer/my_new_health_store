import styles from './ProfileAddress.module.css';
import ProfileCity from './profileCity/ProfileCity';
import ProfilePostalCode from './profilePostalCode/ProfilePostalCode';
import ProfileStreet from './profileStreet/ProfileStreet';

export function ProfileAddress() {
  return (
    <div className={styles['container']}>
      <p className=" mt-10 text-center text-xl font-bold leading-9 tracking-tight text-gray-900">
        address
      </p>
      <div className="mt-2 flex space-x-1" id="addressDiv">
        <ProfileCity />
        <ProfileStreet />
      </div>
      <div className="mt-2 " id="addressDiv">
        <ProfilePostalCode />
      </div>
    </div>
  );
}

export default ProfileAddress;
