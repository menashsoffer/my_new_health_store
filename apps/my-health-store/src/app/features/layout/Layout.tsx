import styles from './Layout.module.css';
import HeaderBar from './headerBar/HeaderBar';
import Cart from '../cart/Cart';
import { Outlet } from 'react-router-dom';
import CartNotFound from '../cart/cartNotFound/CartNotFound';
import { CheckOut } from '../cart/checkOut/CheckOut';
import { useSetData } from './feach/useSetData';
// import { ThemeProvider } from 'styled-components';
// import { themeDark, themeLight } from './global/theme';
// import { Provider } from 'react-redux';
// import { store } from '../../redux/store';

const Layout = () => {
  useSetData();

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
