// import Controller from "../../lib/controller";
import { TYPES } from '../../types';
// import Dispatcher from "../../lib/dispatcher";
import { inject, injectable } from 'inversify';
import IEmployeesService from './employees.interface';
import UserViewmodelDto from '../../models/Employee';

@injectable()
class EmployeesController {
  // public basePath: string = "/auth";
  private employeesService: IEmployeesService;

  constructor(@inject(TYPES.EmployeesService) employeesService: IEmployeesService) {
    this.employeesService = employeesService;
  }

  public getEmployees(): void {
    this.employeesService.getEmployees();
  }
}

export default EmployeesController;
