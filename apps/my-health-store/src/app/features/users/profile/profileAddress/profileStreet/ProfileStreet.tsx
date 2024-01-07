// import styles from './ProfileStreet.module.css';

/* eslint-disable-next-line */
export interface ProfileStreetProps {
  street: string;
}

export function ProfileStreet(props: ProfileStreetProps) {
  return (
    <div className="sm:mx-auto sm:w-full sm:max-w-sm space-x-1">
      <div className="flex items-center justify-between">
        <label
          htmlFor="streetLabel"
          className="block text-sm font-medium leading-6 text-gray-900 "
        >
          Street
        </label>
      </div>
      <div className="mt-2">
        <input
          id="street"
          name="street"
          type="text"
          autoComplete="street"
          required
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          defaultValue={props.street}
        />
      </div>
    </div>
  );
}

export default ProfileStreet;
