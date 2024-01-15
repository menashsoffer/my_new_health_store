import styles from './ProfileEmail.module.css';
import { updateUserAtom } from '../../atom/userStore';
import { useAtom } from 'jotai';
import { useEffect } from 'react';

export function ProfileEmail() {
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
      <div id="emailDiv" className="flex">
        <div className="  sm:w-full">
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Email address
          </label>
          <div className="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              defaultValue={updateUser.email}
              onChange={changeHandler}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileEmail;
