import { useNavigate } from 'react-router-dom';
import styles from './ProductList.module.css';
import ProductItem from './productItem/productItem';
import ProductDetailsNav from '../productDetails/productDetailsNav/ProductDetailsNav';
import { useAtom } from 'jotai';
import { productsListAtom } from '../../../../stores/productsStore';

/* eslint-disable-next-line */
export interface ProductListProps {}

const breadcrumbs = [
  { id: 1, name: 'Home', href: '/' },
  { id: 2, name: 'Products', href: 'products' },
];
export function ProductList(props: ProductListProps) {
  const [products] = useAtom(productsListAtom);
  const navigate = useNavigate();

  return (
    <div className={styles['container']}>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <ProductDetailsNav breadcrumbs={breadcrumbs} />
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Customers also purchased
          </h2>

          <div
            className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
            onClick={() => navigate('productDetails')}
          >
            {products?.map((product, i) => (
              <ProductItem product={product} key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
