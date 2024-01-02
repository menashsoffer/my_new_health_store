import styles from './productItem.module.css';

/* eslint-disable-next-line */
export interface ProductItemProps {
  product: {
    id?: string;
    product_name: string;
    image_src: string;
    image_alt: string;
    price: number;
    category: string;
    product_description: string;
    ingredients: string;
    product_usage: string;
  };
}

export function ProductItem(props: ProductItemProps) {
  return (
    <div className={styles['container']}>
      {' '}
      <div key={props.product.id} className="group relative">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
          <img
            src={props.product.image_src}
            alt={props.product.image_alt}
            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
          />
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <p className="mt-1 text-sm text-gray-500">
              {props.product.product_usage}
            </p>
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
