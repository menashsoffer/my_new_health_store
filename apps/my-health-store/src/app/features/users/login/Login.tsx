import styles from './Login.module.css';
import { useSetAtom } from 'jotai';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { GET_USER_BY_TOKEN } from '../../../../graphql/authenticate';
import { useEffect, useState } from 'react';
import { token, userAtom } from '../atom/userStore';
import EmailLogin from './emailLogin/EmailLogin';
import PasswordLogin from './passwordLogin/PasswordLogin';

export function Login() {
  const navigate = useNavigate();
  const setUser = useSetAtom(userAtom);
  const setToken = useSetAtom(token);
  const [loginUser, { data }] = useMutation(GET_USER_BY_TOKEN);
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const [disable, setDisable] = useState<boolean>(true);

  const handleClick = async () => {
    const { email, password } = form;
    await loginUser({
      variables: {
        input: {
          clientMutationId: 'menashe',
          email,
          password,
        },
      },
    });
  };

  useEffect(() => {
    if (data) {
      click();
      localStorage.setItem('token', data.authenticate.authResponse.jwtToken);
    }
  }, [data]);

  useEffect(() => {
    if (form.email !== '' && form.password !== '') setDisable(false);
  }, [form]);

  const click = () => {
    const a = JSON.parse(data.authenticate.authResponse.userDetails);
    const {
      id,
      firstname,
      lastname,
      email,
      password,
      isadmin,
      city,
      street,
      postalcode,
      phonenumber,
    } = a;
    setUser({
      id,
      firstname,
      lastname,
      isadmin,
      email,
      password,
      city,
      street,
      postalcode,
      phonenumber,
    });
    setToken(data.authenticate.authResponse.jwtToken);
    navigate('/home');
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
            <EmailLogin setForm={setForm} form={form} />
            <PasswordLogin setForm={setForm} form={form} />

            <div>
              <button
                disabled={disable}
                type="submit"
                className={
                  disable
                    ? 'flex w-full justify-center rounded-md bg-gray-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600'
                    : 'flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                }
                onClick={() => handleClick()}
              >
                Sign in
              </button>
            </div>
          </div>

          <div className="mt-10 text-center text-sm text-gray-500">
            Unregistered?{' '}
            <button
              onClick={() => navigate('/signIn')}
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Register here...
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
