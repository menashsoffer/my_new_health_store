import { atom } from 'jotai';
import { ProductRead } from '../../../../library/index';

export const productsListAtom = atom<ProductRead[]>([]);

// const myProducts = async () => {
//   // const test = await trpc.greeting.query({ name: '' });
//   // const newUser = await trpc.userCreate.mutate({ id: 'sd', name: '' });
//   const getProducts = await trpc.productsList.query();

//   // console.log(getProducts[0]);
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
