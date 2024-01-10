import styles from './ProfilePassword.module.css';
import { updateUserAtom } from '../../../../stores/userStore';
import { useAtom } from 'jotai';
import { useEffect } from 'react';

/* eslint-disable-next-line */
// export interface ProfilePasswordProps {
//   password: string;
// }

export function ProfilePassword() {
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
      <div className="mt-2 flex space-x-1" id="PasswordDiv">
        <div className=" sm:w-full sm:max-w-sm space-x-1">
          <div className="flex items-center justify-between">
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Password
            </label>
          </div>
          <div className="mt-2">
            <input
              id="password"
              name="password"
              type="password"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              defaultValue={updateUser.password}
              onChange={changeHandler}
            />
          </div>
        </div>
        <div className=" sm:w-full sm:max-w-sm space-x-1">
          <div className="flex items-center justify-between">
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Confirm password
            </label>
          </div>
          <div className="mt-2">
            <input
              id="confirmPassword"
              name="password"
              type="password"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              defaultValue={updateUser.password}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePassword;
