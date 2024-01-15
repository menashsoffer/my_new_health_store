import { useAtomValue } from 'jotai';
import Category from './categories/Category';
import ProductDetailsNav from './productDetails/productDetailsNav/ProductDetailsNav';
import { categoriesListAtom } from '../../../stores/productsStore';

const breadcrumbs = [{ id: 1, name: 'Home', href: '/' }];

const ProductsPage = () => {
  const categories = useAtomValue(categoriesListAtom);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
        <ProductDetailsNav breadcrumbs={breadcrumbs} />
        <h2 className=" mt-6 text-2xl font-bold text-gray-900">Categories</h2>

        <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
          {categories.map((callout, i) => (
            <Category callout={callout} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
