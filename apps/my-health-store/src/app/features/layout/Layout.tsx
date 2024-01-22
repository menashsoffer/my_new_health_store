import styles from './Layout.module.css';
import HeaderBar from './headerBar/HeaderBar';
import Cart from '../cart/Cart';
import {
  categoriesListAtom,
  productsListAtom,
} from '../products/atom/productsStore';
import { Outlet } from 'react-router-dom';
import { useAtom, useAtomValue } from 'jotai';
import { trpc } from '../../../trpc/index';
import CartNotFound from '../cart/cartNotFound/CartNotFound';
import { useEffect } from 'react';
import { token } from '../users/atom/userStore';
import { CheckOut } from '../cart/checkOut/CheckOut';

const Layout = () => {
  const [productsFromDb, setProducts] = useAtom(productsListAtom);
  const [categoriesFromDb, setCategories] = useAtom(categoriesListAtom);
  const currentToken = useAtomValue(token);

  const myProductsAndCategories = async () => {
    const products = await trpc.productsList.query();
    const categories = await trpc.categoriesList.query();
    if (products.length > 0) {
      productsFromDb.length === 0 ? setProducts(products) : null;
    }
    if (categories.length > 0) {
      categoriesFromDb.length === 0 ? setCategories(categories) : null;
    }
  };

  useEffect(() => {
    if (productsFromDb.length === 0 && categoriesFromDb.length === 0) {
      myProductsAndCategories();
    }
  }, [productsFromDb, categoriesFromDb, currentToken]);

  return (
    <div className={styles['container']}>
      <HeaderBar />
      <Cart />
      <CartNotFound />
      <CheckOut />
      <Outlet />
    </div>
  );
};

export default Layout;
