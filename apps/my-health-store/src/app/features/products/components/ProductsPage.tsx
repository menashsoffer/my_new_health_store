import Category from './categories/Category';
import ProductDetailsNav from './productDetails/productDetailsNav/ProductDetailsNav';

/* eslint-disable-next-line */
export interface ProductsPageProps {}
const callouts = [
  {
    id: 1,
    name: 'Desk and Office',
    description: 'Work from home accessories',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg',
  },
  {
    id: 2,
    name: 'Self-Improvement',
    description: 'Journals and note-taking',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
  },
  {
    id: 3,
    name: 'Travel',
    description: 'Daily commute essentials',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg',
  },
];
const breadcrumbs = [{ id: 1, name: 'Home', href: 'home' }];

export function ProductsPage(props: ProductsPageProps) {
  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <ProductDetailsNav breadcrumbs={breadcrumbs} />
          <h2 className="text-2xl font-bold text-gray-900">Collections</h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {callouts.map((callout, i) => (
              <Category callout={callout} i={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;
