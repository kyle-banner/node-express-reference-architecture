import Controller from '../../controller';
import { TYPES } from '../../types';
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
    this.router.get('/:id', async (req, res, next) => {
      const numberId = parseInt(req.params.id, 10);
      // TODO: validation belongs in the service
      if (isNaN(numberId)) {
        res.status(422).send({
          message: 'Employee id must be an integer',
        });
        return;
      }
      const employees = await this.employeesService.getEmployeeById(numberId);
      res.send(employees);
    });
    this.router.post('/', async (req, res, next) => {
      // TODO: validation belongs in the service
      if (!req.body) {
        // tslint:disable-next-line:no-console
        console.log(req);
        res.status(400).send({
          message: 'Must send an employee in request body',
        });
      }
      if (req.body && req.body.name) {
        if (!req.body.name.firstName) {
          res.status(422).send({
            message: 'First name is a required field',
          });
        }
        if (!req.body.name.lastName) {
          res.status(422).send({
            message: 'Last name is a required field',
          });
        }
      }
      const createdEmployee = await this.employeesService.createEmployee(req.body);
      res.status(201).send(`http://localhost:8080/${createdEmployee.id}`);
    });
  }
}

export default EmployeesController;
