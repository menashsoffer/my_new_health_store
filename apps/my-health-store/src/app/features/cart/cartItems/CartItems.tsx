import { useNavigate } from 'react-router-dom';
import styles from './CartItems.module.css';
import { useAtom, useAtomValue } from 'jotai';
import { useEffect } from 'react';
import { cartAtom } from '../../../stores/cartStore';
import CartNotFound from '../cartNotFound/CartNotFound';

const CartItems = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useAtom(cartAtom);

  useEffect(() => {}, [cart]);

  return cart.length === 0 ? (
    <CartNotFound />
  ) : (
    <div className={styles['container']}>
      {cart.map((item) => (
        <li key={item[0].id} className="flex py-6">
          <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
            <img
              src={item[0].image_src}
              alt={item[0].image_alt}
              className="h-full w-full object-cover object-center"
            />
          </div>

          <div className="ml-4 flex flex-1 flex-col">
            <div>
              <div className="flex justify-between text-base font-medium text-gray-900">
                <h3>
                  <div onClick={() => navigate(`/products/list/${item[0].id}`)}>
                    {item[0].product_name}
                  </div>
                </h3>
                <p className="ml-4">{item[0].price} $</p>
              </div>
              <p className="mt-1 text-sm text-gray-500">
                {item[0].ingredients}
              </p>
            </div>
            <div className="flex flex-1 items-end justify-between text-sm">
              <div className="text-gray-500">Qty {item[1]}</div>
              <div className="flex">
                <div
                  onClick={() => {
                    if (cart.length > 0) {
                      const updatedCart = [...cart];
                      const x = updatedCart.filter(
                        (i) => i[0].id != item[0].id,
                      );
                      setCart(x);
                    } else {
                      setCart([]);
                    }
                  }}
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Remove
                </div>
              </div>
            </div>
          </div>
        </li>
      ))}
    </div>
  );
};

export default CartItems;
