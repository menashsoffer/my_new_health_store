import styles from './SignInPostalCode.module.css';

/* eslint-disable-next-line */
export interface SignInPostalCodeProps {}

export function SignInPostalCode(props: SignInPostalCodeProps) {
  return (
    <div className={styles['container']}>
      <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
        <div className="flex items-center justify-between">
          <label
            htmlFor="postalCode"
            className="block text-sm font-medium leading-6 text-gray-900 "
          >
            Postal Code
          </label>
          <div className="text-sm">
            <a
              href="https://israelpost.co.il/%D7%A9%D7%99%D7%A8%D7%95%D7%AA%D7%99%D7%9D/%D7%90%D7%99%D7%AA%D7%95%D7%A8-%D7%9E%D7%99%D7%A7%D7%95%D7%93/"
              className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              Find your zip code here...
            </a>
          </div>
        </div>
        <div className="mt-2">
          <input
            id="postalCode"
            name="postalCode"
            type="text"
            autoComplete="postalCode"
            required
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
    </div>
  );
}

export default SignInPostalCode;
