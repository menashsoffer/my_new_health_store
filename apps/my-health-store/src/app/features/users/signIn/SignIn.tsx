import styles from './SignIn.module.css';
import Address from './signInForm/signInAddress/Address';
import SignInEmail from './signInForm/signInEmail/signInEmail';
import SignInName from './signInForm/signInName/signInName';
import SignInPassword from './signInForm/signInPassword/signInPassword';
import SignInPhone from './signInForm/signInPhone/signInPhone';
import { useNavigate } from 'react-router-dom';
import SignInButton from './signInForm/signInButton/SignInButton';
import { useAtomValue } from 'jotai';
import { createUserAtom } from '../atom/userStore';
import { useEffect } from 'react';

export function SignIn() {
  const navigate = useNavigate();
  const createUser = useAtomValue(createUserAtom);

  const hasEmpty = Object.values(createUser).includes('');

  useEffect(() => {}, [createUser, hasEmpty]);

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
            Create your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-screen-sm ">
          <form
            className="space-y-6"
            onSubmit={(event) => event.preventDefault()}
            method="POST"
          >
            <SignInName />
            <SignInPhone />
            <SignInEmail />
            <SignInPassword />
            <Address />
            <SignInButton hasEmptyBoolean={hasEmpty} />
          </form>

          <div className="mt-10 text-center text-sm text-gray-500">
            <button
              onClick={() => navigate('/')}
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Go back to store
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
