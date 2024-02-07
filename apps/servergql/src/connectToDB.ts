import { Sequelize } from 'sequelize';
import 'dotenv/config';

export const sequelize = new Sequelize(process.env.POSTGRES_LOCAL as string, {
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

const connectToPG = async () => {
  try {
    await sequelize.authenticate();
    return true;
  } catch (error) {
    return Promise.reject(error);
  }
};

export default connectToPG;
