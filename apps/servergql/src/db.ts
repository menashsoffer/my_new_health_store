import Products from './sequelize';

export type ProductsTypes = {
  id?: string;
  product_name: string;
  product_description: string;
  price: number;
  category: string;
  image_src: string;
  image_alt: string;
  product_usage: string;
  ingredients: string;
};

const getAllProducts = async () => {
  try {
    const products = await Products.findAll();
    console.log(products);
    return products;
  } catch (error) {
    console.log(error);
    return Promise.reject(error);
  }
};

const addProduct = async (product: ProductsTypes) => {
  try {
    const products = await Products.create(product);
    console.log(products);
  } catch (error) {
    console.log(error);
    return Promise.reject(error);
  }
};

export const db = {
  products: {
    findMany: getAllProducts,
    addProduct: addProduct,
    // findById: async (id: string) => users.find((user) => user.id === id),
    // create: async (data: { name: string }) => {
    //   const user = { id: String(users.length + 1), ...data };
    //   users.push(user);
    //   return user;
    // },
  },
};
