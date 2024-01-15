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
import AddAcategory from '../features/products/components/addAcategory/AddAcategory';
import AddProduct from '../features/products/components/addProduct/AddProduct';

export function RouterDOM() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Redirect />} />
        <Route path="home" element={<HomePage />} />
        <Route path="login" element={<Login />} />
        <Route path="signIn" element={<SignIn />} />
        <Route path="profile" element={<Profile />} />
        <Route path="addCategory" element={<AddAcategory />} />
        <Route path="addProduct" element={<AddProduct />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="products/category/:categoryId" element={<ProductList />} />
        <Route
          path="products/product/:productId"
          element={<ProductDetails />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default RouterDOM;
