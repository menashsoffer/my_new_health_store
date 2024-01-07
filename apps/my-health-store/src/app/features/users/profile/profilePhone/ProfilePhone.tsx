import styles from './ProfilePhone.module.css';

/* eslint-disable-next-line */
export interface ProfilePhoneProps {
  phone: number;
}

export function ProfilePhone(props: ProfilePhoneProps) {
  return (
    <div className={styles['container']}>
      <div className={styles['container']}>
        <div
          id="phoneNumberDiv"
          // className=" sm:mx-auto sm:w-full sm:max-w-sm "
        >
          <label
            htmlFor="phoneNumberLabel"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Phone number
          </label>
          <div className="mt-2">
            <input
              id="phoneNumber"
              name="phoneNumber"
              type="text"
              autoComplete="phoneNumber"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              defaultValue={props.phone}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePhone;
