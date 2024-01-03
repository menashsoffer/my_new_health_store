import { Routes, Route } from 'react-router-dom';
import HomePage from '../features/home/HomePage';
import Login from '../features/users/login/Login';
import SignIn from '../features/users/signIn/SignIn';
import Profile from '../features/users/profile/Profile';
import NotFoundPage from '../features/layout/notFountdPage/notFoundPage';
import ProductsPage from '../features/products/components/ProductsPage';
import ProductList from '../features/products/components/productList/ProductList';
import ProductDetails from '../features/products/components/productDetails/ProductDetails';
import Layout from '../features/layout/Layout';
import Redirect from '../features/layout/redirect/Redirect';

const myUser = {
  id: '1',
  name: {
    firstName: 'John',
    lastName: 'Doe',
  },
  email: 'john.doe@example.com',
  password: 'password123',
  address: {
    city: 'New York',
    street: '123 Main St',
    postalCode: '10001',
  },
  phone: 2125551234,
};

export function RouterDOM() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Redirect />} />
        <Route path="home" element={<HomePage />} />
        <Route path="login" element={<Login />} />
        <Route path="signIn" element={<SignIn />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="products/list" element={<ProductList />} />
        <Route
          path="products/list/productDetails"
          element={<ProductDetails />}
        />
        <Route path="profile" element={<Profile user={myUser} />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default RouterDOM;
