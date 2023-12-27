// import { newUserAtom } from 'src/app/stores/UserStore';
import styles from './SignIn.module.css';
import Address from './signInForm/signInAddress/Address';
import SignInEmail from './signInForm/signInEmail/signInEmail';
import SignInName from './signInForm/signInName/signInName';
import SignInPassword from './signInForm/signInPassword/signInPassword';
import SignInPhone from './signInForm/signInPhone/signInPhone';
// import { useAtom } from 'jotai';
// import { useNavigate } from 'react-router-dom';

/* eslint-disable-next-line */
export interface SignInProps {}

export function SignIn(props: SignInProps) {
  // const [newUser, setNewUser] = useAtom(newUserAtom);
  // const navigate = useNavigate();

  const handleFirstName = (firstName: string) => {
    console.log(firstName);

    return firstName;
  };

  const handleLastName = (lastName: string) => {
    return lastName;
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
            Create your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-screen-sm ">
          <form className="space-y-6" action="#" method="POST">
            <SignInName
              onFirstNameChange={handleFirstName}
              onLastNameChange={handleLastName}
            />
            <SignInPhone />
            <SignInEmail />
            <SignInPassword />
            <Address />

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                // onClick={() => }
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            <a
              href="/home"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Go back to store
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
