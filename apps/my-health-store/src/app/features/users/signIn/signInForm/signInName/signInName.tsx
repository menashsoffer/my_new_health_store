import { useAtom } from 'jotai';
import styles from './signInName.module.css';
import { createUserAtom } from '../../../atom/userStore';
import { useEffect } from 'react';

const firstname = 'שם פרטי';
const lastName = 'שם משפחה';

const SignInName = () => {
  const [createUser, setUser] = useAtom(createUserAtom);

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...createUser,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {}, [createUser]);
  return (
    <div className={styles['container']}>
      <div className="mt-2 flex space-x-1" id="nameDiv" dir="rtl">
        <div className=" sm:w-full sm:max-w-sm space-x-1">
          <div className="flex items-center justify-between">
            <label
              htmlFor="firstname"
              className="block text-sm font-medium leading-6 text-gray-900 "
            >
              {firstname}
            </label>
          </div>
          <div className="mt-2">
            <input
              id="firstname"
              name="firstname"
              type="text"
              autoComplete="firstname"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
              {lastName}
            </label>
          </div>
          <div className="mt-2">
            <input
              id="lastname"
              name="lastname"
              type="text"
              autoComplete="lastname"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={changeHandler}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInName;
