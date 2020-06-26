import { body, param } from 'express-validator';
import express from 'express';
import Controller from '../../controller';
import { TYPES } from '../../types';
import requestValidationFailures from '../../util/validateEndpoint';
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
    this.router.get('/', async (req: express.Request, res: express.Response) => {
      const employees = await this.employeesService.getEmployees();
      res.send(employees);
    });

    this.router.get('/:id', [param('id').not().isEmpty()], async (req: express.Request, res: express.Response) => {
      const errors = requestValidationFailures(req);
      if (errors.length) {
        return res.status(400).json({ errors });
      }

      const employees = await this.employeesService.getEmployeeById(req.params.id);
      res.send(employees);
    });

    this.router.post(
      '/',
      [body('email').isEmail(), body('name.firstName').not().isEmpty(), body('name.lastName').not().isEmpty()],
      async (req: express.Request, res: express.Response) => {
        const errors = requestValidationFailures(req);
        if (errors.length) {
          return res.status(400).json({ errors });
        }

        const createdEmployee = await this.employeesService.createEmployee(req.body);
        res.status(201).send(`http://localhost:8080/employees/${createdEmployee.id}`);
      }
    );

    this.router.put(
      '/:id',
      [
        body('email').isEmail(),
        body('name.firstName').not().isEmpty(),
        body('name.lastName').not().isEmpty(),
        param('id').not().isEmpty(),
      ],
      async (req: express.Request, res: express.Response) => {
        const errors = requestValidationFailures(req);
        if (errors.length) {
          return res.status(400).json({ errors });
        }

        const employee = { ...req.body, id: req.params.id };
        const createdEmployee = await this.employeesService.updateEmployee(employee);
        if (createdEmployee.previouslyExisted) {
          res.status(200).send(`http://localhost:8080/employees/${createdEmployee.id}`);
        }
        res.status(201).send(`http://localhost:8080/employees/${createdEmployee.id}`);
      }
    );

    this.router.delete('/:id', [param('id').not().isEmpty()], async (req: express.Request, res: express.Response) => {
      const errors = requestValidationFailures(req);
      if (errors.length) {
        return res.status(400).json({ errors });
      }
      const deleteResult = await this.employeesService.deleteEmployee(req.params.id);
      if (deleteResult) {
        res.status(200).send();
      }
      res.status(404).send(`Could not find employee with id ${req.params.id}`);
    });
  }
}

export default EmployeesController;
