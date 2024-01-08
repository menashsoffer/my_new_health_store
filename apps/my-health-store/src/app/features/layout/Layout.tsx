import styles from './Layout.module.css';
import HeaderBar from './headerBar/HeaderBar';
import Cart from '../cart/Cart';
import { productsListAtom } from '../../stores/productsStore';
import { Outlet } from 'react-router-dom';
import { useAtom } from 'jotai';
import { trpc } from '../../../index';
import { ProductRead } from '../../../../../library/index';
import { useQuery } from '@apollo/client';
import { GET_USERS } from '../../../graphql/query';

const Layout = () => {
  const [productsFromDb, setProducts] = useAtom(productsListAtom);

  const myProducts = async () => {
    const products: ProductRead[] =
      (await trpc.productsList.query()) as unknown as ProductRead[];
    productsFromDb.length === 0 ? setProducts(products) : null;
  };
  myProducts();

  const { loading, error, data } = useQuery(GET_USERS);
  console.log(data);

  return (
    <div className={styles['container']}>
      <HeaderBar />
      <Cart products={productsFromDb} quantity={3} setOpen={true} />
      <Outlet />
    </div>
  );
};

export default Layout;
