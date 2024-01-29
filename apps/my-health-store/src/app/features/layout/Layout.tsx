import styles from './Layout.module.css';
import HeaderBar from './headerBar/HeaderBar';
import Cart from '../cart/Cart';
import { Outlet } from 'react-router-dom';
import CartNotFound from '../cart/cartNotFound/CartNotFound';
import { CheckOut } from '../cart/checkOut/CheckOut';
import { useSetData } from './feach/useSetData';
// import {
//   categoriesListAtom,
//   productsListAtom,
// } from '../products/atom/productsStore';
// import { useAtom, useAtomValue } from 'jotai';
// import { trpc } from '../../../trpc/index';
// import { useEffect } from 'react';
// import { token } from '../users/atom/userStore';
// import { ThemeProvider } from 'styled-components';
// import { themeDark, themeLight } from './global/theme';
// import { Provider } from 'react-redux';
// import { store } from '../../redux/store';

const Layout = () => {
  useSetData();
  // const [productsFromDb, setProducts] = useAtom(productsListAtom);
  // const [categoriesFromDb, setCategories] = useAtom(categoriesListAtom);
  // const currentToken = useAtomValue(token);

  // const myProductsAndCategories = async () => {
  //   const products = await trpc.productsList.query();
  //   const categories = await trpc.categoriesList.query();
  //   if (products.length > 0) {
  //     productsFromDb.length === 0 ? setProducts(products) : null;
  //   }
  //   if (categories.length > 0) {
  //     categoriesFromDb.length === 0 ? setCategories(categories) : null;
  //   }
  // };

  // useEffect(() => {
  //   if (productsFromDb.length === 0 && categoriesFromDb.length === 0) {
  //     myProductsAndCategories();
  //   }
  // }, [productsFromDb, categoriesFromDb, currentToken]);

  return (
    <div className={styles['container']}>
      {/* <Provider store={store}> */}
      {/* <ThemeProvider theme={themeMode ? themeLight : themeDark}> */}
      <HeaderBar />
      <Cart />
      <CartNotFound />
      <CheckOut />

      <Outlet />
      {/* </ThemeProvider> */}
      {/* </Provider> */}
    </div>
  );
};

export default Layout;
