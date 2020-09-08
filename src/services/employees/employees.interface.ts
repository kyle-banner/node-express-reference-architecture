import { Employee as EmployeeEntity } from '../../entity/Employee';
import Employee from '@models/Employee';
import CreateEmployeeRequest from '@models/CreateEmployeeRequest';
import UpdateEmployeeResponse from '@models/UpdateEmployeeResponse';

interface IEmployeesService {
  getEmployees(): Promise<EmployeeEntity[]>;
  getEmployeeById(id: string): Promise<EmployeeEntity | undefined>;
  createEmployee(employee: CreateEmployeeRequest): Promise<EmployeeEntity>;
  updateEmployee(employee: Employee): Promise<UpdateEmployeeResponse>;
  deleteEmployee(id: string): Promise<boolean>;
}

export default IEmployeesService;
