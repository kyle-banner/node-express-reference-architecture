import express, { Router } from 'express';
import { injectable } from 'inversify';

@injectable()
abstract class Controller {
  abstract basePath: string;
  public router: Router = express.Router();
  protected abstract initializeRoutes(): void;

  // tslint:disable-next-line:no-empty
  constructor() {}
}

export default Controller;
