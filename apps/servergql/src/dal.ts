import { addCategory, getAllCategories } from './dal/categoryDal';
import { addProduct, getAllProducts } from './dal/productDal';

export const db = {
  products: {
    findMany: getAllProducts,
    addProduct: addProduct,
  },
  categories: {
    findMany: getAllCategories,
    addCategory: addCategory,
  },
};
