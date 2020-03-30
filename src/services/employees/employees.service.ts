import { injectable } from 'inversify';
import IEmployeesService from './employees.interface';
import Employee from '../../models/Employee'; // set up auto-routing thing used in project-tanner-smiths

@injectable()
class EmployeesService implements IEmployeesService {
  getEmployees(): Promise<Employee[]> {
    throw new Error('This is a test. Method not implemented yet.');
  }
  getEmployeeById(id: string): Promise<Employee | undefined> {
    throw new Error('Method not implemented.');
  }
}

export default EmployeesService;
