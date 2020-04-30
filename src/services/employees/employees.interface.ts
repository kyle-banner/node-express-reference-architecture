import Employee from '@models/Employee';

interface IEmployeesService {
  getEmployees(): Promise<Employee[]>;
  getEmployeeById(id: string): Promise<Employee | undefined>;
}

export default IEmployeesService;
