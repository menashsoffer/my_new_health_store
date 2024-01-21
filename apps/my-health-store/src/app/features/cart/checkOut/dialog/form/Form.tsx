import { useAtomValue } from 'jotai';
import styles from './Form.module.css';
import { userAtom } from '../../../../users/atom/userStore';

const Form = () => {
  const user = useAtomValue(userAtom);

  return (
    <div className={styles['container']}>
      <form action="" className="mt-10 flex flex-col space-y-4">
        <div>
          <label
            htmlFor="email"
            className="text-xs font-semibold text-indigo-500"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            defaultValue={user.email}
            className="mt-1 block w-full rounded border-indigo-300 bg-indigo-50 py-3 px-4 text-sm text-indigo-500 shadow-sm outline-none transition focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div>
          {/* <p className="text-xs font-semibold text-indigo-500">Address</p> */}
          <div className=" flex flex-wrap justify-center">
            <div className=" my-1 max-w-32">
              <label
                htmlFor="city"
                className="text-xs font-semibold text-indigo-500"
              >
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                defaultValue={user.city}
                className="mt-1 block w-full rounded border-indigo-300 bg-indigo-50 py-3 px-4 text-sm text-indigo-500 shadow-sm outline-none transition focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div className="my-1 ml-3 mr-3 ">
              <label
                htmlFor="street"
                className="text-xs font-semibold text-indigo-500"
              >
                Street
              </label>
              <input
                type="text"
                id="street"
                name="street"
                defaultValue={user.street}
                className="mt-1 block w-full rounded border-indigo-300 bg-indigo-50 py-3 px-4 text-sm text-indigo-500 shadow-sm outline-none transition focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div className="my-1 max-w-32 ">
              <label
                htmlFor="postalcode"
                className="text-xs font-semibold text-indigo-500"
              >
                Postal code
              </label>
              <input
                type="text"
                id="postalcode"
                name="postalcode"
                defaultValue={user.postalcode}
                className="mt-1 block w-full rounded border-indigo-300 bg-indigo-50 py-3 px-4 text-sm text-indigo-500 shadow-sm outline-none transition focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>
        </div>
        <div>
          <label
            htmlFor="phonenumber"
            className="text-xs font-semibold text-indigo-500"
          >
            Phone number
          </label>
          <input
            type="text"
            id="phonenumber"
            name="phonenumber"
            defaultValue={user.phonenumber}
            className="mt-1 block w-full rounded border-indigo-300 bg-indigo-50 py-3 px-4 text-sm text-indigo-500 shadow-sm outline-none transition focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </form>
    </div>
  );
};

export default Form;
