import { Sequelize } from 'sequelize-typescript';
import addModels from './index';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'Ab123456',
        database: 'haha_club_db_dev',
      });
      sequelize.addModels(addModels);
      await sequelize.sync();
      return sequelize;
    },
  },
];
