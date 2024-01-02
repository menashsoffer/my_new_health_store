import { Routes, Route } from 'react-router-dom';
import HomePage from '../features/home/HomePage';
import Login from '../features/users/login/Login';
import SignIn from '../features/users/signIn/SignIn';
import Profile from '../features/users/profile/Profile';
import NotFoundPage from '../features/layout/notFountdPage/notFoundPage';
import ProductsPage from '../features/products/components/ProductsPage';
import ProductList from '../features/products/components/productList/ProductList';
import ProductDetails from '../features/products/components/productDetails/ProductDetails';

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
      <Route path="*" element={<NotFoundPage />} />
      <Route path="home" element={<HomePage />} />
      <Route path="home/login" element={<Login />} />
      <Route path="home/signIn" element={<SignIn />} />
      <Route path="home/products" element={<ProductsPage />} />
      <Route path="home/products/list" element={<ProductList />} />
      <Route
        path="home/products/list/productDetails"
        element={<ProductDetails />}
      />
      <Route path="home/profile" element={<Profile user={myUser} />} />
    </Routes>
  );
}

export default RouterDOM;
