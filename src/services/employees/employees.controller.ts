import Controller from '@src/controller';
import { TYPES } from '@src/types';
import { inject, injectable } from 'inversify';
import IEmployeesService from './employees.interface';

@injectable()
class EmployeesController extends Controller {
  public basePath: string = '/employees';
  private employeesService: IEmployeesService;

  constructor(@inject(TYPES.EmployeesService) employeesService: IEmployeesService) {
    super();
    this.employeesService = employeesService;
    this.initializeRoutes();
  }

  public initializeRoutes() {
    this.router.get('/', async (req, res, next) => {
      const employees = await this.employeesService.getEmployees();
      res.send(employees);
    });
  }
}

export default EmployeesController;
