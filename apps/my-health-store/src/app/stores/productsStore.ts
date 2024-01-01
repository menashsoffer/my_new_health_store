import { trpc } from '../../index';

const a = async () => {
  // const test = await trpc.greeting.query({ name: 'nachman' });
  // const newUser = await trpc.userCreate.mutate({ id: 'sd', name: 'qwertyui' });
  const getProducts = await trpc.productsList.query();
  console.log(getProducts);
  const addProduct = await trpc.addProduct.mutate({
    product_name: 'a',
    product_description: 'asdfghjkl',
    category: 'asdfghjkl',
    image_alt: 'xcv',
    image_src: 'fghjk',
    ingredients: 'fghjkl',
    price: 34567,
    product_usage: 'tyuikol',
  });
  console.log(addProduct);
  return getProducts;
};
a();
