import { useAtomValue } from 'jotai';
import Category from './categories/Category';
import ProductDetailsNav from './productDetails/productDetailsNav/ProductDetailsNav';
import { categoriesListAtom } from '../atom/productsStore';
import { token } from '../../users/atom/userStore';
import LoginRequest from './loginRequest/LoginRequest';

const breadcrumbs = [{ id: 1, name: 'דף הבית', href: '/' }];

const ProductsPage = () => {
  const categories = useAtomValue(categoriesListAtom);
  const currentToken = useAtomValue(token);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl sm:py-10 lg:max-w-none lg:py-10">
        <ProductDetailsNav breadcrumbs={breadcrumbs} />
        <h2 dir="rtl" className=" mt-6 text-2xl font-bold text-gray-900">
          קטגוריות
        </h2>
        {currentToken.toString().length > 0 ? (
          <div className="cursor-pointer  mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {categories.map((callout, i) => (
              <Category callout={callout} key={i} />
            ))}
          </div>
        ) : (
          <div className=" mt-6">
            <LoginRequest />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
