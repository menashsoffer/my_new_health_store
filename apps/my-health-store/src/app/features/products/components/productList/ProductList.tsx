import { useNavigate } from 'react-router-dom';
import styles from './ProductList.module.css';
import ProductItem from './productItem/productItem';
import ProductDetailsNav from '../productDetails/productDetailsNav/ProductDetailsNav';

/* eslint-disable-next-line */
export interface ProductListProps {}

const products = [
  {
    id: 1,
    name: 'Basic Tee',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
    categoryId: 1,
  },
];
for (let i = 2; i <= 11; i++) {
  products.push({
    id: i,
    name: `Product ${i}`,
    imageSrc: `https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-0${i}.jpg`,
    imageAlt: 'Product image',
    price: '$' + (25 + i),
    color: ['Black', 'White', 'Blue'][Math.floor(Math.random() * 3)],
    categoryId: Math.ceil(Math.random() * 3),
  });
}
const breadcrumbs = [
  { id: 1, name: 'Home', href: 'home' },
  { id: 2, name: 'Products', href: 'home/products' },
];
export function ProductList(props: ProductListProps) {
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
            {products.map((product) => (
              <ProductItem product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
