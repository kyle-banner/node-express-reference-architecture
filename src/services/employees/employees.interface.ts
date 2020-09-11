import EmployeeDto from 'src/dto/Employee';

interface IEmployeesService {
  getEmployees(): Promise<EmployeeDto[]>;
  getEmployeeById(id: string): Promise<EmployeeDto | undefined>;
  createEmployee(employee: EmployeeDto): Promise<EmployeeDto>;
  updateEmployee(employee: EmployeeDto): Promise<EmployeeDto>;
  deleteEmployee(id: string): Promise<EmployeeDto | undefined>;
}

export default IEmployeesService;
