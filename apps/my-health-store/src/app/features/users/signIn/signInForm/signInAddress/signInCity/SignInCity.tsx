import { useEffect } from 'react';
import { createUserAtom } from '../../../../atom/userStore';
import { useAtom } from 'jotai';

const SignInCity = () => {
  const [createUser, setUser] = useAtom(createUserAtom);

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...createUser,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {}, [createUser]);
  return (
    <div className=" sm:w-full sm:max-w-sm space-x-1">
      <div className="flex items-center justify-between">
        <label
          htmlFor="city"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          City
        </label>
      </div>
      <div className="mt-2">
        <input
          id="city"
          name="city"
          type="text"
          autoComplete="city"
          required
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          onChange={changeHandler}
        />
      </div>
    </div>
  );
};

export default SignInCity;
