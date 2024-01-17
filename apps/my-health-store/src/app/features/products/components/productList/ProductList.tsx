import styles from './ProductList.module.css';
import { useAtomValue } from 'jotai';
import { useParams } from 'react-router-dom';
import ProductItem from './productItem/productItem';
import ProductDetailsNav from '../productDetails/productDetailsNav/ProductDetailsNav';
import { productsListAtom } from '../../atom/productsStore';

const breadcrumbs = [
  { id: 1, name: 'Home', href: '/' },
  { id: 2, name: 'Products', href: '/products' },
];
const ProductList = () => {
  const products = useAtomValue(productsListAtom);
  const { categoryId } = useParams();

  const filteredList = products.filter(
    (p) => p.categoryId.toString() === categoryId,
  );

  return (
    <div className={styles['container']}>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8 lg:py-10">
          <ProductDetailsNav breadcrumbs={breadcrumbs} />
          {/* <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Customers also purchased
          </h2> */}

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {filteredList.map((product, i) => (
              <ProductItem product={product} key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
