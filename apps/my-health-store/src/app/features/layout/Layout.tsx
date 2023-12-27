import React, { ReactNode } from 'react';
import styles from './Layout.module.css';
import HeaderBar from './headerBar/HeaderBar';
import Cart from '../cart/Cart';
import Main from './main/main';

export interface LayoutProps {
  children: ReactNode;
}

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

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles['container']}>
      <HeaderBar />
      <Cart products={products} quantity={3} setOpen={true} />
      <Main>{children}</Main>
    </div>
  );
};

export default Layout;
