import styles from './ProfilePhone.module.css';
import { updateUserAtom } from '../../atom/userStore';
import { useAtom } from 'jotai';
import { useEffect } from 'react';

const ProfilePhone = () => {
  const [updateUser, setUser] = useAtom(updateUserAtom);

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...updateUser,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {}, [updateUser]);

  return (
    <div className={styles['container']}>
      <div
        id="phonenumberDiv"
        // className=" sm:mx-auto sm:w-full sm:max-w-sm "
      >
        <label
          htmlFor="phonenumber"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Phone number
        </label>
        <div className="mt-2">
          <input
            id="phonenumber"
            name="phonenumber"
            type="text"
            required
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            defaultValue={updateUser.phonenumber}
            onChange={changeHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default ProfilePhone;
