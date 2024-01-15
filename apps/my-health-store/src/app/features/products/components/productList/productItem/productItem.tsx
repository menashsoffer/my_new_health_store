import styles from './productItem.module.css';
import { ProductRead } from '../../../../../../../../library/index';
import { useNavigate } from 'react-router-dom';

/* eslint-disable-next-line */
export interface ProductItemProps {
  product: ProductRead;
}

export function ProductItem(props: ProductItemProps, key: number) {
  const navigate = useNavigate();

  return (
    <div
      className={styles['container']}
      key={props.product.id}
      onClick={() => navigate(`/products/product/${props.product.id}`)}
    >
      {' '}
      <div key={key} className="group relative">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
          <img
            key={key}
            src={props.product.image_src}
            alt={props.product.image_alt}
            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
          />
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <p className="mt-1 text-sm text-gray-500" key={key}>
              {props.product.product_usage}
            </p>
          </div>
          <p className="text-sm font-medium text-gray-900" key={key}>
            {props.product.price}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
