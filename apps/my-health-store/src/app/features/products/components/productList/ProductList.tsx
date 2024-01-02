import { useNavigate } from 'react-router-dom';
import styles from './ProductList.module.css';
import ProductItem from './productItem/productItem';
import ProductDetailsNav from '../productDetails/productDetailsNav/ProductDetailsNav';
import { useEffect, useState } from 'react';
import { myProducts } from '../../../../stores/productsStore';
import { ProductsTypes } from '../../../../../../../servergql/src/db';

/* eslint-disable-next-line */
export interface ProductListProps {}

const breadcrumbs = [
  { id: 1, name: 'Home', href: 'home' },
  { id: 2, name: 'Products', href: 'home/products' },
];
export function ProductList(props: ProductListProps) {
  const [products, setProducts] = useState<ProductsTypes[]>();
  const navigate = useNavigate();

  useEffect(() => {
    const x = async () => {
      const newProducts = await myProducts();
      setProducts(newProducts);
    };
    x();
  }, []);

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
            {products?.map((product, i) => <ProductItem product={product} />)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
