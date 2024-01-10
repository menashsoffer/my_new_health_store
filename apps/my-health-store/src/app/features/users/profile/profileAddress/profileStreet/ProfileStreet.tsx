import { useEffect } from 'react';
import { updateUserAtom } from '../../../../../stores/userStore';
import { useAtom } from 'jotai';

export function ProfileStreet() {
  const [updateUser, setUser] = useAtom(updateUserAtom);

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...updateUser,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {}, [updateUser]);
  return (
    <div className="sm:mx-auto sm:w-full sm:max-w-sm space-x-1">
      <div className="flex items-center justify-between">
        <label
          htmlFor="street"
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
          required
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          defaultValue={updateUser.street}
          onChange={changeHandler}
        />
      </div>
    </div>
  );
}

export default ProfileStreet;
