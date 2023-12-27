// import styles from './SignInCity.module.css';

/* eslint-disable-next-line */
export interface SignInCityProps {}

export function SignInCity(props: SignInCityProps) {
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
        />
      </div>
    </div>
  );
}

export default SignInCity;
