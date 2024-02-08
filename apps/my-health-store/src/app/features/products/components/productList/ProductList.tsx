import styles from './ProductList.module.css';
import { useAtomValue } from 'jotai';
import { useParams } from 'react-router-dom';
import ProductItem from './productItem/productItem';
import ProductDetailsNav from '../productDetails/productDetailsNav/ProductDetailsNav';
import { categoriesListAtom, productsListAtom } from '../../atom/productsStore';

const breadcrumbs = [
  { id: 1, name: 'דף הבית', href: '/' },
  { id: 2, name: 'קטגוריות', href: '/products' },
];
const ProductList = () => {
  const products = useAtomValue(productsListAtom);
  const categories = useAtomValue(categoriesListAtom);
  const { categoryId } = useParams();

  console.log(categories);

  //   let a = 0
  // categoryId ? a = categories

  const filteredList = products.filter(
    (p) => p.categoryId.toString() === categoryId,
  );

  return (
    <div className={styles['container']}>
      <div className="cursor-pointer bg-white">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8 lg:py-10">
          <ProductDetailsNav breadcrumbs={breadcrumbs} />
          <h2 dir="rtl" className=" mt-6 text-2xl font-bold text-gray-900">
            מוצרי {}
          </h2>
          {/* <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Customers also purchased
          </h2> */}

          <div className=" mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
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
