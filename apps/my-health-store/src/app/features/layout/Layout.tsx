import React, { ReactNode, useEffect, useState } from 'react';
import styles from './Layout.module.css';
import HeaderBar from './headerBar/HeaderBar';
import Cart from '../cart/Cart';
import Main from './main/Main';
import { ProductsTypes } from 'apps/servergql/src/db';
import { myProducts } from '../../stores/productsStore';

export interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [products, setProducts] = useState<ProductsTypes[]>();

  useEffect(() => {
    const getProducts = async () => {
      const newProducts = await myProducts();
      setProducts(newProducts);
    };
    getProducts();
  }, []);

  return (
    <div className={styles['container']}>
      <HeaderBar />
      <Cart products={products} quantity={3} setOpen={true} />
      <Main>{children}</Main>
    </div>
  );
};

export default Layout;
