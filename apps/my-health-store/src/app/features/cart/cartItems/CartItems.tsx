import { useNavigate } from 'react-router-dom';
import styles from './CartItems.module.css';
import { useAtom, useAtomValue } from 'jotai';
import { useEffect } from 'react';
import { cartAtom } from '../atom/cartStore';
import CartNotFound from '../cartNotFound/CartNotFound';
import PlusIcon from './icons/PlusIcon';
import MinusIcon from './icons/MinusIcon';
import { addOne, removeOne } from './fn/addAndRemove';

const CartItems = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useAtom(cartAtom);

  useEffect(() => {}, [cart]);

  return cart.length === 0 ? (
    <CartNotFound />
  ) : (
    <div className={styles['container']}>
      {cart.map((item) => (
        <li key={item.product.id} className="flex py-6">
          <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
            <img
              src={item.product.image_src}
              alt={item.product.image_alt}
              className="h-full w-full object-cover object-center"
            />
          </div>

          <div className="ml-4 flex flex-1 flex-col">
            <div>
              <div className="flex justify-between text-base font-medium text-gray-900">
                <h3>
                  <button
                    onClick={() =>
                      navigate(`/products/product/${item.product.id}`)
                    }
                  >
                    {item.product.product_name}
                  </button>
                </h3>
                <p className="ml-4">{item.product.price} $</p>
              </div>
              <p className="mt-1 text-sm text-gray-500">
                {item.product.ingredients}
              </p>
            </div>
            <div className="flex flex-1 items-end justify-between text-sm mt-2">
              <div className="flex flex-cols space-x-4">
                <button
                  className="bg-indigo-500 min-w-5 rounded-full p-1"
                  onClick={() => {
                    setCart(() => addOne(cart, item.product.id));
                  }}
                >
                  <PlusIcon />
                </button>
                <div className="text-indigo-500 p-1">{item.quantity}</div>
                {item.quantity > 1 && (
                  <button
                    className="bg-indigo-500 min-w-7 rounded-full p-1"
                    onClick={() => {
                      setCart(() => removeOne(cart, item.product.id));
                    }}
                  >
                    <MinusIcon />
                  </button>
                )}
              </div>
              <div className="flex">
                <button
                  onClick={() => {
                    if (cart.length > 0) {
                      const updatedCart = [...cart];
                      const x = updatedCart.filter(
                        (i) => i.product.id != item.product.id,
                      );
                      setCart(x);
                    } else {
                      setCart([]);
                    }
                  }}
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        </li>
      ))}
    </div>
  );
};

export default CartItems;
