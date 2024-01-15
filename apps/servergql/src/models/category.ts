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
      type: DataTypes.STRING,
      allowNull: false,
    },
    image_src: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    schema: 'store',
    tableName: 'categories',
  },
);
