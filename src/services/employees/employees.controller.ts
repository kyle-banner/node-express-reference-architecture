import Controller from '../../controller';
import { TYPES } from '../../types';
import { inject, injectable } from 'inversify';
import IEmployeesService from './employees.interface';
import UserViewmodelDto from '../../models/Employee';

@injectable()
class EmployeesController extends Controller {
  public basePath: string = '/employees';
  private employeesService: IEmployeesService;

  constructor(@inject(TYPES.EmployeesService) employeesService: IEmployeesService) {
    super();
    this.employeesService = employeesService;
    this.initializeRoutes();
  }

  public initializeRoutes(): void {
    this.router.get('/', (req, res, next) => this.employeesService.getEmployees());
  }
}

export default EmployeesController;
