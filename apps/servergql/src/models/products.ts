import { DataTypes } from 'sequelize';
import { Model } from 'sequelize';
import { ProductCreate, ProductRead } from '../../../library/index';
import { sequelize } from '../connectToDB';

export const ProductModel = sequelize.define<Model<ProductRead, ProductCreate>>(
  'products',
  {
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
    categoryId: {
      type: DataTypes.INTEGER,
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
  },
  {
    schema: 'store',
    tableName: 'products',
  },
);
