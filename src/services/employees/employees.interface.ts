import { Employee as EmployeeEntity } from '../../entity/Employee';
import Employee from 'src/dto/Employee';
import CreateEmployeeRequest from 'src/dto/CreateEmployeeRequest';
import UpdateEmployeeResponse from 'src/dto/UpdateEmployeeResponse';

interface IEmployeesService {
  getEmployees(): Promise<EmployeeEntity[]>;
  getEmployeeById(id: string): Promise<EmployeeEntity | undefined>;
  createEmployee(employee: CreateEmployeeRequest): Promise<EmployeeEntity>;
  updateEmployee(employee: Employee): Promise<UpdateEmployeeResponse>;
  deleteEmployee(id: string): Promise<boolean>;
}

export default IEmployeesService;
