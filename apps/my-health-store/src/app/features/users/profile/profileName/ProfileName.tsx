import { useAtom } from 'jotai';
import styles from './ProfileName.module.css';
import { updateUserAtom } from '../../atom/userStore';
import { useEffect } from 'react';

const ProfileName = () => {
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
      <div className={styles['container']}>
        <div className="mt-2 flex space-x-1" id="nameDiv">
          <div className=" sm:w-full sm:max-w-sm space-x-1">
            <div className="flex items-center justify-between">
              <label
                htmlFor="firstname"
                className="block text-sm font-medium leading-6 text-gray-900 "
              >
                First name
              </label>
            </div>
            <div className="mt-2">
              <input
                id="firstname"
                name="firstname"
                type="text"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={updateUser.firstname}
                onChange={changeHandler}
              />
            </div>
          </div>
          <div className="sm:mx-auto sm:w-full sm:max-w-sm space-x-1">
            <div className="flex items-center justify-between">
              <label
                htmlFor="lastname"
                className="block text-sm font-medium leading-6 text-gray-900 "
              >
                Last name
              </label>
            </div>
            <div className="mt-2">
              <input
                id="lastname"
                name="lastname"
                type="text"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={updateUser.lastname}
                onChange={changeHandler}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileName;
