import styles from './ProfileName.module.css';

/* eslint-disable-next-line */
export interface ProfileNameProps {
  name: {
    firstName: string;
    lastName: string;
  };
}

export function ProfileName(props: ProfileNameProps) {
  return (
    <div className={styles['container']}>
      <div className={styles['container']}>
        <div className="mt-2 flex space-x-1" id="nameDiv">
          <div className=" sm:w-full sm:max-w-sm space-x-1">
            <div className="flex items-center justify-between">
              <label
                htmlFor="firstName"
                className="block text-sm font-medium leading-6 text-gray-900 "
              >
                First name
              </label>
            </div>
            <div className="mt-2">
              <input
                id="firstName"
                name="firstName"
                type="text"
                autoComplete="firstName"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={props.name.firstName}
              />
            </div>
          </div>
          <div className="sm:mx-auto sm:w-full sm:max-w-sm space-x-1">
            <div className="flex items-center justify-between">
              <label
                htmlFor="lastName"
                className="block text-sm font-medium leading-6 text-gray-900 "
              >
                Last name
              </label>
            </div>
            <div className="mt-2">
              <input
                id="lastName"
                name="lastName"
                type="text"
                autoComplete="lastName"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={props.name.lastName}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileName;
