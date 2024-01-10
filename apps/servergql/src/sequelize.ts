import { DataTypes } from 'sequelize';
import { sequelize } from './connectToDB';
import { Model } from 'sequelize';
import { ProductCreate, ProductRead } from '../../library/index';

export const ProductModel = sequelize.define<Model<ProductRead, ProductCreate>>(
  'products',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    product_description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image_src: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image_alt: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    product_usage: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ingredients: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  },
  {
    schema: 'store',
    tableName: 'products',
    // sequelize,
  },
);

// export const createProductsTable = async () => {
//   try {
//     await Products.sync({ force: true }).then(() => {
//       console.log('Table Products created successfully');
//     });
//   } catch (error) {
//     console.log('Unable to create Table: products');
//     console.log(error);
//     return Promise.reject(error);
//   }
// };
// export default Products;
