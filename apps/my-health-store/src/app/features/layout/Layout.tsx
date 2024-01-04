import styles from './Layout.module.css';
import HeaderBar from './headerBar/HeaderBar';
import Cart from '../cart/Cart';
import { productsListAtom } from '../../stores/productsStore';
import { Outlet } from 'react-router-dom';
import { useAtom } from 'jotai';
import { trpc } from '../../../index';

const Layout = () => {
  const [productsFromDb, setProducts] = useAtom(productsListAtom);

  const myProducts = async () => {
    const products = await trpc.products.productsList.query();
    productsFromDb.length === 0 ? setProducts(products) : null;
  };
  myProducts();

  return (
    <div className={styles['container']}>
      <HeaderBar />
      <Cart products={productsFromDb} quantity={3} setOpen={true} />
      <Outlet />
    </div>
  );
};

export default Layout;
