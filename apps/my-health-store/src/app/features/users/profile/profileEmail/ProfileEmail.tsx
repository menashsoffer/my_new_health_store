import styles from './ProfileEmail.module.css';

/* eslint-disable-next-line */
export interface ProfileEmailProps {
  email: string;
}

export function ProfileEmail(props: ProfileEmailProps) {
  return (
    <div className={styles['container']}>
      <div className={styles['container']}>
        <div id="emailDiv" className="flex">
          <div className="  sm:w-full">
            <label
              htmlFor="emailLabel"
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
                defaultValue={props.email}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileEmail;
