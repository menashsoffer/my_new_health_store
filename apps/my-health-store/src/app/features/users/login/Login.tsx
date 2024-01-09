import { useAtom, useSetAtom } from 'jotai';
import styles from './Login.module.css';
import { useNavigate } from 'react-router-dom';
import { avatarAtom } from '../../../stores/avatarStore';
import { useLazyQuery } from '@apollo/client';
import { GET_USER_BY_EMAIL } from '../../../../graphql/query';
import { useEffect, useState } from 'react';
import { newUserAtom } from '../../../stores/userStore';

export function Login() {
  const navigate = useNavigate();
  const [, setShow] = useAtom(avatarAtom);
  const setUser = useSetAtom(newUserAtom);
  const [getUser, { data }] = useLazyQuery(GET_USER_BY_EMAIL);
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const checkUser = () => {
    getUser({ variables: { email: form.email } });
  };

  useEffect(() => {
    console.log(data);
    if (data) click();
  }, [data]);

  const click = () => {
    if (data.userByEmail.password === form.password) {
      const {
        id,
        firstname,
        lastname,
        email,
        password,
        city,
        street,
        postalcode,
        phonenumber,
      } = data.userByEmail;
      setUser({
        id,
        firstname,
        lastname,
        email,
        password,
        city,
        street,
        postalcode,
        phonenumber,
      });
      setShow(true);
      navigate('/home');
    } else {
      console.log('not valid password');
    }
  };

  return (
    <div className={styles['container']}>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://seeklogo.com/images/F/forever-logo-93E476442D-seeklogo.com.png"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="space-y-6">
            <div>
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
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={changeHandler}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <div
                    onClick={() => navigate('/')}
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </div>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={changeHandler}
                />
              </div>
            </div>
            {form.email !== '' && form.password !== '' ? (
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  onClick={() => checkUser()}
                >
                  Sign in
                </button>
              </div>
            ) : null}
          </div>

          <p className="mt-10 text-center text-sm text-gray-500">
            Unregistered?{' '}
            <div
              onClick={() => navigate('/signIn')}
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Register here...
            </div>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Login;
