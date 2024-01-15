import { CategoryCreate } from '../../../library/index';
import { CategoryModel } from '../models/category';

export const getAllCategories = async () => {
  try {
    const products = (await CategoryModel.findAll()).map((c) => {
      return c.dataValues;
    });
    return products;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const addCategory = async (product: CategoryCreate) => {
  try {
    await CategoryModel.create(product);
  } catch (error) {
    console.log(error);
    throw error;
  }
};
