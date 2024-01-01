import styles from './productItem.module.css';

/* eslint-disable-next-line */
export interface ProductItemProps {
  product: {
    id: number;
    name: string;
    imageSrc: string;
    imageAlt: string;
    price: string;
    color: string;
    categoryName: string;
  };
}

export function ProductItem(props: ProductItemProps) {
  return (
    <div className={styles['container']}>
      {' '}
      <div key={props.product.id} className="group relative">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
          <img
            src={props.product.imageSrc}
            alt={props.product.imageAlt}
            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
          />
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <p className="mt-1 text-sm text-gray-500">{props.product.color}</p>
          </div>
          <p className="text-sm font-medium text-gray-900">
            {props.product.price}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
