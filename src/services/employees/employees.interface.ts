import EmployeeDto from 'src/dto/Employee';
import CreateEmployeeRequest from 'src/dto/CreateEmployeeRequest';

interface IEmployeesService {
  getEmployees(): Promise<EmployeeDto[]>;
  getEmployeeById(id: string): Promise<EmployeeDto | undefined>;
  createEmployee(employee: CreateEmployeeRequest): Promise<EmployeeDto>;
  updateEmployee(employee: EmployeeDto): Promise<EmployeeDto>;
  deleteEmployee(id: string): Promise<EmployeeDto | undefined>;
}

export default IEmployeesService;
