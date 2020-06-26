import Employee from '@models/Employee';
import CreateEmployeeRequest from '@models/CreateEmployeeRequest';
import UpdateEmployeeResponse from '@models/UpdateEmployeeResponse';

interface IEmployeesService {
  getEmployees(): Promise<Employee[]>;
  getEmployeeById(id: string): Promise<Employee | undefined>;
  createEmployee(employee: CreateEmployeeRequest): Promise<Employee>;
  updateEmployee(employee: Employee): Promise<UpdateEmployeeResponse>;
  deleteEmployee(id: string): Promise<boolean>;
}

export default IEmployeesService;
