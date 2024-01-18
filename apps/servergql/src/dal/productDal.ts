import { ProductModel } from '../models/products';
import { ProductCreate } from '../../../library/index';

export const getAllProducts = async () => {
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

export const addProduct = async (product: ProductCreate) => {
  try {
    await ProductModel.create(product);
  } catch (error) {
    console.log(error);
    throw error;
  }
};
