import Employee from '@models/Employee';
import CreateEmployeeRequest from '@models/CreateEmployeeRequest';

interface IEmployeesService {
  getEmployees(): Promise<Employee[]>;
  getEmployeeById(id: string): Promise<Employee | undefined>;
  createEmployee(employee: CreateEmployeeRequest): Employee;
  updateEmployee(employee: CreateEmployeeRequest): Employee;
  deleteEmployee(id: number): boolean;
}

export default IEmployeesService;
