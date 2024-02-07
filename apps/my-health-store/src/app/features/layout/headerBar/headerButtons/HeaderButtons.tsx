import { useAtom, useAtomValue } from 'jotai';
import Avatar from '../../avatar/Avatar';
import styles from './HeaderButtons.module.css';
import { useNavigate } from 'react-router-dom';
import { cartNotFoundAtom, openCartAtom } from '../../../cart/atom/cartStore';
import { userAtom } from '../../../users/atom/userStore';
import { cartAtom } from '../../../cart/atom/cartStore';
import { useEffect, useState } from 'react';
// import { Moon, Son } from './svg/Svg';

const HeaderButtons = () => {
  const navigate = useNavigate();
  const [amount, setAmount] = useState<number>(0);
  const [open, setOpen] = useAtom(openCartAtom);
  const [notFound, setNotFound] = useAtom(cartNotFoundAtom);
  const user = useAtomValue(userAtom);
  const cart = useAtomValue(cartAtom);

  useEffect(() => {
    let a = 0;
    cart.map((i) => {
      a += i.quantity;
    });
    setAmount(a);
  }, [cart]);

  return (
    <div className={styles['container']}>
      <div className=" inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        <div className="relative inline-flex w-fit">
          {cart.length > 0 ? (
            <div className="absolute bottom-auto left-auto right-2 top-2 z-10 inline-block -translate-y-1/2 translate-x-2/4 rotate-0 skew-x-0 skew-y-0 scale-x-100 scale-y-100 whitespace-nowrap rounded-full bg-indigo-700 px-2.5 py-1 text-center align-baseline text-xs font-bold leading-none text-white">
              {amount}
            </div>
          ) : null}

          <button
            type="button"
            className="relative rounded-full bg-gray-800 p-2 text-gray-400 hover:text-white"
            onClick={() => {
              cart.length !== 0 ? setOpen(!open) : setNotFound(!notFound);
            }}
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
        </div>

        {user.email.length > 3 ? (
          <Avatar />
        ) : (
          <button
            type="button"
            className="relative rounded-full bg-gray-800 p-2 text-gray-400 hover:text-white"
            onClick={() => navigate('login')}
          >
            login
          </button>
        )}
      </div>
    </div>
  );
};

export default HeaderButtons;
