import { useEffect, useState } from 'react';
import styles from './Layout.module.css';
import HeaderBar from './headerBar/HeaderBar';
import Cart from '../cart/Cart';
import { ProductsTypes } from 'apps/servergql/src/db';
import { myProducts } from '../../stores/productsStore';
import { Outlet } from 'react-router-dom';

const Layout = () => {
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
      <Outlet />
    </div>
  );
};

export default Layout;
