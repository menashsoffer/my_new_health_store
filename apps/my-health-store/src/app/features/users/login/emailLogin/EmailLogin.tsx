import styles from './EmailLogin.module.css';

/* eslint-disable-next-line */
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

const EmailLogin = (props: EmailLoginProps) => {
  const form = props.form;
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.setForm({ ...form, [event.target.name]: event.target.value });
  };
  return (
    <div className={styles['container']}>
      <div>
        <label
          htmlFor="email"
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
            onChange={changeHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default EmailLogin;
