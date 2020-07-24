import { Sequelize } from 'sequelize-typescript';
import { Container } from 'typedi';
import * as path from 'path';

export default class Database {
  private configureSequelize: Sequelize;
  constructor() {
    // @ts-ignore
    this.configureSequelize = new Sequelize({
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      dialect: 'postgres',
      modelPaths: [path.resolve(__dirname, '../repository/model/')]
    });
  }
  getSequelize() {
    return this.configureSequelize;
  }
}
