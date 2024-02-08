import styles from './Login.module.css';
import { useSetAtom } from 'jotai';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { GET_USER_BY_TOKEN } from '../../../../graphql/authenticate';
import { useEffect, useState } from 'react';
import { token, userAtom } from '../atom/userStore';
import EmailLogin from './emailLogin/EmailLogin';
import PasswordLogin from './passwordLogin/PasswordLogin';
import { ToastContainer, toast } from 'react-toastify';

export function Login() {
  const navigate = useNavigate();
  const setUser = useSetAtom(userAtom);
  const setToken = useSetAtom(token);
  const [loginUser, { data, loading, error }] = useMutation(GET_USER_BY_TOKEN);
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState(loading);

  const values = Object.values(form).includes('');

  const notify = () =>
    toast.success('התחברת בהצלחה!!', {
      position: 'top-center',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
      rtl: true,
    });

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
    if (isLoading === false) {
      setIsLoading(loading);
    }
  }, [loading]);

  useEffect(() => {
    if (data) {
      click();
      localStorage.setItem('token', data.authenticate.authResponse.jwtToken);
    }
  }, [data]);

  const click = () => {
    const a = data.authenticate.authResponse.userDetails;
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
    if (!error) {
      notify();
      setTimeout(() => navigate('/home'), 3000);
    }
  };

  // useEffect(() => {
  //   error && <>{error}</>;
  //   console.log(error?.message);
  // }, [error]);

  return (
    <div className={styles['container']}>
      <ToastContainer />

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
                disabled={isLoading}
                type="submit"
                className={
                  values || isLoading
                    ? 'cursor-not-allowed flex w-full justify-center rounded-md bg-gray-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600'
                    : 'flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                }
                onClick={() => handleClick()}
              >
                {loading ? (
                  <div>
                    Loading{' '}
                    <svg
                      aria-hidden="true"
                      role="status"
                      className="inline w-4 h-4 me-3 text-gray-200 animate-spin dark:text-gray-600"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="#1C64F2"
                      />
                    </svg>
                  </div>
                ) : (
                  'Sign in'
                )}
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
