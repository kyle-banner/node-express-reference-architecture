import Employee from '@models/Employee';
import CreateEmployeeRequest from '@models/CreateEmployeeRequest';
import Name from '@models/Name';

interface IEmployeesService {
  getEmployees(): Promise<Employee[]>;
  getEmployeeById(id: number): Employee | undefined;
  createEmployee(employee: CreateEmployeeRequest): Employee;
  updateEmployeeName(name: Name): Employee;
  updateEmployeeEmail(email: string): Employee;
  deleteEmployee(id: number): boolean;
}

export default IEmployeesService;
