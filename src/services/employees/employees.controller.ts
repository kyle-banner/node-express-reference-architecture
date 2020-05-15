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
      }
      const employees = await this.employeesService.getEmployeeById(numberId);
      res.send(employees);
    });
    this.router.post('/', async (req, res, next) => {
      // TODO: validation belongs in the service
      // TODO: use Elvis operator or conditional _.get check
      if (!req.body) {
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
    this.router.patch('/:id/name', async (req, res, next) => {
      // TODO: validation belongs in the service
      // TODO: use Elvis operator or conditional _.get check
      if (!req.body.name) {
        res.status(400).send({
          message: 'First and last name are required.',
        });
      } else if (req.body.name) {
        if (!req.body.name.firstName) {
          res.status(422).send({
            message: 'First name is a required field.',
          });
        }
        if (!req.body.name.lastName) {
          res.status(422).send({
            message: 'Last name is a required field.',
          });
        }
      }
      const updatedEmployee = await this.employeesService.updateEmployeeName(req.body.name);
      res.status(200).send(updatedEmployee);
    });
    this.router.patch('/:id/email', async (req, res, next) => {
      // TODO: validation belongs in the service
      // TODO: use Elvis operator or conditional _.get check
      if (!req.body) {
        res.status(400).send({
          message: 'Email is required.',
        });
      } else if (!req.body.email) {
        res.status(422).send({
          message: 'Email is required.',
        });
      }
      const updatedEmployee = await this.employeesService.updateEmployeeEmail(req.body.email);
      res.status(200).send(updatedEmployee);
    });
    this.router.delete('/:id', async (req, res, next) => {
      const numberId = parseInt(req.params.id, 10);
      // TODO: validation belongs in the service
      if (isNaN(numberId)) {
        res.status(422).send({
          message: 'Employee id must be an integer',
        });
      }
      try {
        await this.employeesService.deleteEmployee(numberId);
      } catch (e) {
        // TODO: extend error so that not found and could not be deleted can be different responses
        res.status(404).send({
          message: 'Employee was not found or could not be deleted.',
        });
      }
      res.status(200).send();
    });
  }
}

export default EmployeesController;
