import { useAtom } from 'jotai';
import styles from './SignInPostalCode.module.css';
import { createUserAtom } from '../../../../atom/userStore';
import { useEffect } from 'react';

const postalCode = 'תא דואר';
const findPostalCode = 'מצא את הכתובת דואר כאן...';

const SignInPostalCode = () => {
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
      <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
        <div className="flex items-center justify-between">
          <label
            htmlFor="postalcode"
            className="block text-sm font-medium leading-6 text-gray-900 "
          >
            {postalCode}
          </label>
          <div className="text-sm">
            <a
              dir="rtl"
              href="https://israelpost.co.il/%D7%A9%D7%99%D7%A8%D7%95%D7%AA%D7%99%D7%9D/%D7%90%D7%99%D7%AA%D7%95%D7%A8-%D7%9E%D7%99%D7%A7%D7%95%D7%93/"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              {findPostalCode}
            </a>
          </div>
        </div>
        <div className="mt-2">
          <input
            id="postalcode"
            name="postalcode"
            type="text"
            autoComplete="postalCode"
            required
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            onChange={changeHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default SignInPostalCode;
