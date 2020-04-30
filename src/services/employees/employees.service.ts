import { injectable } from 'inversify';
import IEmployeesService from './employees.interface';
import Employee from '@models/Employee';
import { database } from '../../database';

@injectable()
class EmployeesService implements IEmployeesService {
  async getEmployees(): Promise<Employee[]> {
    const allRows: any = await database.all('SELECT * FROM employees');
    // TODO: use orm here instead of assuming Employee[], possibly convert to sequelize
    const employees: Employee[] = allRows;
    return employees;
  }
  getEmployeeById(id: string): Promise<Employee | undefined> {
    throw new Error('Method not implemented.');
  }
}

export default EmployeesService;
