import { Container } from 'inversify';
import { TYPES } from './types';
import IEmployeesService from './services/employees/employees.interface';
import EmployeesService from './services/employees/employees.service';

const container: Container = new Container();
container.bind<IEmployeesService>(TYPES.EmployeesService).to(EmployeesService);
// set up mocking switch in here

export default container;
