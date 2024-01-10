import { useAtom } from 'jotai';
import { updateUserAtom, userAtom } from '../../../stores/userStore';
import styles from './Profile.module.css';
import ProfileAddress from './profileAddress/ProfileAddress';
import ProfileEmail from './profileEmail/ProfileEmail';
import ProfileName from './profileName/ProfileName';
import ProfilePassword from './profilePassword/ProfilePassword';
import ProfilePhone from './profilePhone/ProfilePhone';
import { useNavigate } from 'react-router-dom';

import SubmitButton from './submitButton/SubmitButton';

export function Profile() {
  const navigate = useNavigate();
  const [user] = useAtom(userAtom);
  const [updateUser, setUpdateUser] = useAtom(updateUserAtom);
  if (updateUser.email === '' && updateUser.password === '') {
    setUpdateUser(user);
  }

  return (
    <div className={styles['container']}>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://seeklogo.com/images/F/forever-logo-93E476442D-seeklogo.com.png"
            alt="Your Company"
          />
          <img
            className="mt-10 mx-auto h-100 w-auto rounded-full"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt={user.email.charAt(0)}
          />
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-screen-sm ">
          <form
            className="space-y-6"
            onSubmit={(event) => event.preventDefault()}
            method="POST"
          >
            <ProfileName />
            <ProfilePhone />
            <ProfileEmail />
            <ProfilePassword />
            <ProfileAddress />
            <SubmitButton />
          </form>

          <div className="mt-10 text-center text-sm text-gray-500">
            <div
              onClick={() => navigate('/home')}
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Go back to store
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
