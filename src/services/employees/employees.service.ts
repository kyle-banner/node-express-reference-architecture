import { injectable } from 'inversify';
import IEmployeesService from './employees.interface';
import Employee from '@models/Employee';
import EmployeeRequest from '@models/EmployeeRequest';
import { employees, employee } from './employees.mockData';

@injectable()
class EmployeesService implements IEmployeesService {
  getEmployees(): Employee[] {
    return employees;
  }
  getEmployeeById(id: number): Employee | undefined {
    if (id === 1234) {
      return employee;
    }
    return undefined;
  }
  createEmployee(employeeRequest: EmployeeRequest): Employee {
    const createdEmployee: Employee = {
      id: 6789,
      name: employeeRequest.name,
      employer: {
        id: 3456,
        name: 'Slalom',
      },
      email: employeeRequest.email,
    };
    return createdEmployee;
  }
}

export default EmployeesService;
