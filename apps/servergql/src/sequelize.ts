import { CategoryModel } from './models/category';
import { ProductModel } from './models/products';

CategoryModel.hasMany(ProductModel);
ProductModel.belongsTo(CategoryModel);

// export const createProductsTable = async () => {
//   try {
//     await CategoryModel.sync({ force: true }).then(() => {
//       console.log('Table categories created successfully');
//     });
//     await ProductModel.sync({ force: true }).then(() => {
//       console.log('Table products created successfully');
//     });
//   } catch (error) {
//     console.log('Unable to create Table', error);
//     return Promise.reject(error);
//   }
// };
