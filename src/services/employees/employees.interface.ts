import Employee from '@models/Employee';
import CreateEmployeeRequest from '@models/CreateEmployeeRequest';

interface IEmployeesService {
  getEmployees(): Promise<Employee[]>;
  getEmployeeById(id: string): Promise<Employee | undefined>;
  createEmployee(employee: CreateEmployeeRequest): Employee;
  updateEmployee(employee: Employee): Employee;
  deleteEmployee(id: string): boolean;
}

export default IEmployeesService;
