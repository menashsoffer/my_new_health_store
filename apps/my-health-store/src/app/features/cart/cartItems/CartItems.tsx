import { useNavigate } from 'react-router-dom';
import styles from './CartItems.module.css';
import { ProductRead } from '../../../../../../library/index';

/* eslint-disable-next-line */
export interface CartItemsProps {
  product: ProductRead;
  quantity: number;
}

export function CartItems(props: CartItemsProps) {
  const navigate = useNavigate();
  return (
    <div className={styles['container']}>
      <li key={props.product.id} className="flex py-6">
        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
          <img
            src={props.product.image_src}
            alt={props.product.image_alt}
            className="h-full w-full object-cover object-center"
          />
        </div>

        <div className="ml-4 flex flex-1 flex-col">
          <div>
            <div className="flex justify-between text-base font-medium text-gray-900">
              <h3>
                <div onClick={() => navigate('products/list/productDetails')}>
                  {props.product.product_name}
                </div>
              </h3>
              <p className="ml-4">{props.product.price}</p>
            </div>
            {/* <p className="mt-1 text-sm text-gray-500">{props.product.color}</p> */}
          </div>
          <div className="flex flex-1 items-end justify-between text-sm">
            <p className="text-gray-500">Qty {props.quantity}</p>

            <div className="flex">
              <button
                type="button"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      </li>
    </div>
  );
}

export default CartItems;
