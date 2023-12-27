import { useAtom } from 'jotai';
import Avatar from '../../avatar/Avatar';
import styles from './HeaderButtons.module.css';
import { useNavigate } from 'react-router-dom';
import { cartAtom } from '../../../../stores/cartStore';
import { avatarAtom } from '../../../../stores/avatarStore';

/* eslint-disable-next-line */
export interface HeaderButtonsProps {}

export function HeaderButtons(props: HeaderButtonsProps) {
  const navigate = useNavigate();
  const [open, setOpen] = useAtom(cartAtom);
  const [show] = useAtom(avatarAtom);

  return (
    <div className={styles['container']}>
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        <button
          type="button"
          className="relative rounded-full bg-gray-800 p-2 text-gray-400 hover:text-white "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </button>
        <button
          type="button"
          className="relative rounded-full bg-gray-800 p-2 text-gray-400 hover:text-white"
          onClick={() => setOpen(!open)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
        </button>
        {show === true ? (
          <Avatar />
        ) : (
          <button
            type="button"
            className="relative rounded-full bg-gray-800 p-2 text-gray-400 hover:text-white"
            onClick={() => navigate('home/login')}
          >
            login
          </button>
        )}
      </div>
    </div>
  );
}

export default HeaderButtons;
