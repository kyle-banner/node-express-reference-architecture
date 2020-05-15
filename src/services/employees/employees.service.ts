import { injectable } from 'inversify';
import IEmployeesService from './employees.interface';
import Employee from '@models/Employee';
import EmployeeRequest from '@models/EmployeeRequest';
import { employees, employee } from './employees.mockData';
import Name from '@models/PersonName';

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
  updateEmployeeName(name: Name): Employee {
    const updatedEmployee: Employee = {
      id: 6789,
      name,
      employer: {
        id: 3456,
        name: 'Slalom',
      },
      email: 'example1234@company.com',
    };
    return updatedEmployee;
  }
  updateEmployeeEmail(email: string): Employee {
    const updatedEmployee: Employee = {
      id: 6789,
      name: {
        firstName: 'John',
        lastName: 'Smith',
      },
      employer: {
        id: 3456,
        name: 'Slalom',
      },
      email,
    };
    return updatedEmployee;
  }
  deleteEmployee(id: number): boolean {
    if (id !== 1234) throw new Error('Employee not found.');
    return true;
  }
}

export default EmployeesService;
