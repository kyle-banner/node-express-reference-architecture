import 'reflect-metadata';
import express from 'express';
// import routes from './routes';
import Controller from './controller';
import container from './inversify.config';
import EmployeesController from './services/employees/employees.controller';
import { TYPES } from './types';

class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    const controllers = [container.get<Controller>(TYPES.EmployeesController)];
    controllers.forEach((controller) => {
      this.app.use(controller.basePath, controller.router);
    });
  }

  public listen(): void {
    this.app.listen(process.env.PORT, () => {
      // tslint:disable-next-line:no-console
      console.log(`Server listening on port ${process.env.PORT}`);
    });
  }
}

const app: App = new App();
app.listen();
