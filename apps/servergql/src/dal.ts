import { ProductCreate } from '../../library/index';
import { ProductModel } from './sequelize';

const getAllProducts = async () => {
  try {
    const products = (await ProductModel.findAll()).map((p) => {
      return p.dataValues;
    });
    return products;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
getAllProducts();

const addProduct = async (product: ProductCreate) => {
  try {
    await ProductModel.create(product);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const db = {
  products: {
    findMany: getAllProducts,
    addProduct: addProduct,
  },
};
