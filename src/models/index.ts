import fs from 'fs';
import path from 'path';
import { DATABASE_URL } from '@/config';
import { ModelCtor, Sequelize } from 'sequelize-typescript';

let db: Sequelize;

const initSequelize = () => {
  const _basename = path.basename(module.filename);
  const sequelize = new Sequelize(
    {
      "username": "root",
      "password": "Khushi#123",
      "database": "demo_development",
      "host": "localhost",
      "dialect": "mysql"
    }
);
  sequelize
    .authenticate()
    .then(() => console.log(`Successfully Connected Database`))
    .catch((err) => console.log(`Something Went Wrong with connection ${err.message}`));

  const _models = fs
    .readdirSync(__dirname)
    .filter((file: string) => {
      return (
        file !== _basename &&
        file !== 'interfaces' &&
        file.slice(-5) !== '.d.ts' &&
        (file.slice(-3) === '.js' || file.slice(-3) === '.ts')
      );
    })
    .map((file: string) => {
      const model: ModelCtor = require(path.join(__dirname, file))?.default;
      return model;
    });

  sequelize.addModels(_models);
  return sequelize;
};

if (!db) {
  db = initSequelize();
}

export default db;
