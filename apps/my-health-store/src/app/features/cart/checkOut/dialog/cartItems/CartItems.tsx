import { useAtomValue } from 'jotai';
import styles from './CartItems.module.css';
import { cartAtom } from '../../../atom/cartStore';
import { useEffect, useState } from 'react';

const CartItems = () => {
  const cart = useAtomValue(cartAtom);
  const [amount, setAmount] = useState<number>(0);
  useEffect(() => {
    let a = 0;
    cart.map((i) => {
      a += i.product.price * i.quantity;
    });
    setAmount(a);
  }, [cart]);

  return (
    <div className={styles['container']}>
      <div className="relative">
        <ul className="space-y-5">
          {cart.map((item, i) => {
            return (
              <li key={i} className="flex justify-between">
                <div className="inline-flex">
                  <img
                    src={item.product.image_src}
                    alt={item.product.image_alt}
                    className="max-h-16"
                  />
                  <div className="ml-3">
                    <p className="text-base font-semibold text-white">
                      {item.product.product_name}
                    </p>
                    <p className="text-sm font-medium text-white text-opacity-80">
                      {item.quantity}
                    </p>
                  </div>
                </div>
                <p className="text-sm font-semibold text-white">
                  {item.product.price} $
                </p>
              </li>
            );
          })}
        </ul>
        <div className="my-5 h-0.5 w-full bg-white bg-opacity-30"></div>
        <div className="space-y-2">
          <p className="flex justify-between text-lg font-bold text-white">
            <span>Total price:</span>
            <span>{`${amount} $`}</span>
          </p>
          <p className="flex justify-between text-sm font-medium text-white">
            <span></span>
            <span></span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
