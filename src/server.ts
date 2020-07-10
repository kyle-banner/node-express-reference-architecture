import 'reflect-metadata';
import express from 'express';
import bodyParser from 'body-parser';
import Controller from './controller';
import container from './inversify.config';
import { TYPES } from './types';

class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.app.use(bodyParser.json());
    const controllers = [
      container.get<Controller>(TYPES.EmployeesController),
      container.get<Controller>(TYPES.EncountersController),
    ];
    controllers.forEach((controller) => {
      this.app.use(controller.basePath, controller.router);
    });
  }

  public listen(): void {
    this.app.listen(process.env.PORT, () => {
      // tslint:disable-next-line:no-console
      console.log(`Server listening http://localhost:${process.env.PORT}/`);
    });
  }
}

const app: App = new App();
app.listen();
