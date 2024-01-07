import styles from './ProfilePassword.module.css';

/* eslint-disable-next-line */
export interface ProfilePasswordProps {
  password: string;
}

export function ProfilePassword(props: ProfilePasswordProps) {
  return (
    <div className={styles['container']}>
      <div className={styles['container']}>
        <div className="mt-2 flex space-x-1" id="PasswordDiv">
          <div className=" sm:w-full sm:max-w-sm space-x-1">
            <div className="flex items-center justify-between">
              <label
                htmlFor="passwordLabel"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={props.password}
              />
            </div>
          </div>
          <div className=" sm:w-full sm:max-w-sm space-x-1">
            <div className="flex items-center justify-between">
              <label
                htmlFor="passwordLabel"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Confirm password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="confirmPassword"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={props.password}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePassword;
