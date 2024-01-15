import styles from './ProductDetails.module.css';
import { useAtom, useAtomValue } from 'jotai';
import ProductDetailsNav from './productDetailsNav/ProductDetailsNav';
import { productsListAtom } from '../../../../stores/productsStore';
import { useParams } from 'react-router-dom';
import { cartAtom } from '../../../../stores/cartStore';
import { addToCart } from './fn/addToCartFn';

const ProductDetails = () => {
  const { productId } = useParams();
  const products = useAtomValue(productsListAtom);
  const [cart, setCart] = useAtom(cartAtom);

  const breadcrumbs = [
    { id: 1, name: 'Home', href: '/' },
    { id: 2, name: 'Products', href: 'products' },
    { id: 3, name: 'Products list', href: 'products/list' },
  ];

  const currentProduct = products.find(
    (p) => String(p.id) === productId?.toString(),
  );

  return currentProduct === undefined ? (
    <div>hi</div>
  ) : (
    <div className={styles['container']}>
      <div className="bg-white">
        <div className="pt-6">
          <ProductDetailsNav breadcrumbs={breadcrumbs} />

          {/* Image gallery */}
          <div className="mx-auto mt-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
            <img
              src={currentProduct?.image_src}
              alt={currentProduct?.image_alt}
              className="h-full w-full object-cover object-center"
            />
          </div>

          {/* Product info */}
          <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                {currentProduct?.product_name}
              </h1>
            </div>

            {/* Options */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl tracking-tight text-gray-900">
                {currentProduct?.price} $
              </p>

              <form className="mt-10">
                <div
                  onClick={() => setCart(() => addToCart(cart, currentProduct))}
                  className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Add to cart
                </div>
              </form>
            </div>

            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
              {/* Description and details */}
              <div>
                <h3 className="sr-only">Description</h3>

                <div className="space-y-6">
                  <p className="text-base text-gray-900">
                    {currentProduct?.product_description}
                  </p>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-sm font-medium text-gray-900">
                  Highlights
                </h3>
              </div>

              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">Details</h2>

                <div className="mt-4 space-y-6">
                  <p className="text-sm text-gray-600">
                    {currentProduct?.product_usage}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
