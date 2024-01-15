import { DataTypes, Model } from 'sequelize';
import { CategoryCreate, CategoryRead } from '../../../library/index';
import { sequelize } from '../connectToDB';

export const CategoryModel = sequelize.define<
  Model<CategoryRead, CategoryCreate>
>(
  'categories',
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    image_src: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    schema: 'store',
    tableName: 'categories',
  },
);
