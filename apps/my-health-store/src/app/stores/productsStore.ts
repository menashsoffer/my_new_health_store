import { atom } from 'jotai';
import {
  CategoryRead,
  ProductCreate,
  ProductRead,
} from '../../../../library/index';

export const productsListAtom = atom<ProductRead[]>([]);
export const productForm = atom<ProductCreate>({
  product_name: '',
  product_description: '',
  price: 0,
  categoryId: 1,
  image_src: '',
  image_alt: '',
  product_usage: '',
  ingredients: '',
});

export const categoriesListAtom = atom<CategoryRead[]>([]);
// const myProducts = async () => {
//   // const addProduct = await trpc.addProduct.mutate({
//   //   product_name: 'a',
//   //   product_description: 'hi you',
//   //   category: 'first',
//   //   image_alt: 'xcv',
//   //   image_src: 'image',
//   //   ingredients: 'new product',
//   //   price: 34567,
//   //   product_usage: 'second',
//   // });
//   // console.log(addProduct);

//   return getProducts;
// };

// export default myProducts;
