import Employee from '@models/Employee';
import EmployeeRequest from '@models/EmployeeRequest';
import Name from '@models/PersonName';

interface IEmployeesService {
  getEmployees(): Employee[];
  getEmployeeById(id: number): Employee | undefined;
  createEmployee(employee: EmployeeRequest): Employee;
  updateEmployeeName(name: Name): Employee;
  updateEmployeeEmail(email: string): Employee;
  deleteEmployee(id: number): boolean;
}

export default IEmployeesService;
