import styles from './EmailLogin.module.css';

export interface EmailLoginProps {
  form: {
    email: string;
    password: string;
  };
  setForm: React.Dispatch<
    React.SetStateAction<{
      email: string;
      password: string;
    }>
  >;
}

const emailAddress = 'כתובת מייל';

const EmailLogin = ({ form, setForm }: EmailLoginProps) => {
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };
  return (
    <div className={styles['container']}>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium leading-6 text-gray-900"
          dir="rtl"
        >
          {emailAddress}
        </label>
        <div className="mt-2">
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            onChange={changeHandler}
            dir="rtl"
          />
        </div>
      </div>
    </div>
  );
};

export default EmailLogin;
