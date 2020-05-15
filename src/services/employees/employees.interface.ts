import Employee from '@models/Employee';
import EmployeeRequest from '@models/EmployeeRequest';

interface IEmployeesService {
  getEmployees(): Employee[];
  getEmployeeById(id: number): Employee | undefined;
  createEmployee(employee: EmployeeRequest): Employee;
}

export default IEmployeesService;
