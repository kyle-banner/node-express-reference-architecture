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
      container.get<Controller>(TYPES.MeetingsController),
    ];
    controllers.forEach((controller) => {
      this.app.use(controller.basePath, controller.router);
    });
    this.app.get('/', (req, res, next) => {
      res.send('Healthy');
    });
  }

  public listen(): void {
    this.app.listen(8080, () => {
      // tslint:disable-next-line:no-console
      console.log(`Server listening http://localhost:8080/`);
    });
  }
}

const app: App = new App();
app.listen();
