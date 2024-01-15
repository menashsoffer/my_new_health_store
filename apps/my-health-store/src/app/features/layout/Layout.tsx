import styles from './Layout.module.css';
import HeaderBar from './headerBar/HeaderBar';
import Cart from '../cart/Cart';
import {
  categoriesListAtom,
  productsListAtom,
} from '../products/atom/productsStore';
import { Outlet } from 'react-router-dom';
import { useAtom } from 'jotai';
import { trpc } from '../../../trpc/index';
import { CategoryRead, ProductRead } from '../../../../../library/index';
import CartNotFound from '../cart/cartNotFound/CartNotFound';
import { useEffect } from 'react';

const Layout = () => {
  const [productsFromDb, setProducts] = useAtom(productsListAtom);
  const [categoriesFromDb, setCategories] = useAtom(categoriesListAtom);

  const myProductsAndCategories = async () => {
    const products: ProductRead[] = await trpc.productsList.query();
    const categories: CategoryRead[] = await trpc.categoriesList.query();
    productsFromDb.length === 0 ? setProducts(products) : null;
    categoriesFromDb.length === 0 ? setCategories(categories) : null;
  };

  useEffect(() => {
    if (productsFromDb.length === 0 && categoriesFromDb.length === 0) {
      myProductsAndCategories();
    }
  }, [productsFromDb, categoriesFromDb]);

  return (
    <div className={styles['container']}>
      <HeaderBar />
      <Cart />
      <CartNotFound />
      <Outlet />
    </div>
  );
};

export default Layout;
