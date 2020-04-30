import { injectable } from 'inversify';
import IEmployeesService from './employees.interface';
import Employee from '../../models/Employee'; // set up auto-routing thing used in project-tanner-smiths
import { database } from '../../database';

@injectable()
class EmployeesService implements IEmployeesService {
  async getEmployees(): Promise<Employee[]> {
    // how do I not use "any" here?
    // switch to sequelize-typescript?
    const allRows: any = await database.all('SELECT * FROM employees');
    const employees: Employee[] = allRows;
    return employees;
  }
  getEmployeeById(id: string): Promise<Employee | undefined> {
    throw new Error('Method not implemented.');
  }
}

export default EmployeesService;
