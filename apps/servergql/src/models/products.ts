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
      type: DataTypes.TEXT,
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
      type: DataTypes.TEXT,
      allowNull: false,
    },
    image_alt: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    product_usage: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    ingredients: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    schema: 'store',
    tableName: 'products',
  },
);
