import { useNavigate } from 'react-router-dom';
import styles from './PasswordLogin.module.css';

/* eslint-disable-next-line */
export interface PasswordLoginProps {
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

const password = 'סיסמה';
const forgotPassword = 'שכחת סיסמה ?';
export function PasswordLogin({ form, setForm }: PasswordLoginProps) {
  const navigate = useNavigate();
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  return (
    <div className={styles['container']}>
      <div>
        <div className="flex items-center justify-between" dir="rtl">
          <label
            htmlFor="password"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            {password}
          </label>
          <div className="text-sm">
            <div
              onClick={() => navigate('/')}
              className="cursor-pointer font-semibold text-indigo-600 hover:text-indigo-500"
            >
              {forgotPassword}
            </div>
          </div>
        </div>
        <div className="mt-2">
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            onChange={changeHandler}
            dir="rtl"
          />
        </div>
      </div>
    </div>
  );
}

export default PasswordLogin;
