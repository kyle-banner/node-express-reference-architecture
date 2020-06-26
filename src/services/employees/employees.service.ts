import { injectable, inject } from 'inversify';
import { TYPES } from '../../types';
import IEmployeesService from './employees.interface';
import Employee from '@models/Employee';
import CreateEmployeeRequest from '@models/CreateEmployeeRequest';
import { v4 as uuidv4 } from 'uuid';
import { employee } from './employees.mockData';
import IMongoClient from 'src/util/mongoClient.interface';

@injectable()
class EmployeesService implements IEmployeesService {
  private mongoClient: IMongoClient;

  constructor(@inject(TYPES.MongoClient) injectedMongoClient: IMongoClient) {
    this.mongoClient = injectedMongoClient;
  }

  async getEmployees(): Promise<Employee[]> {
    return await this.mongoClient.getCollection('employees', 'test');
  }
  async getEmployeeById(id: string): Promise<Employee | undefined> {
    const employees = await this.mongoClient.getResource('employees', 'test', { id });
    return employees;
  }
  createEmployee(createEmployeeRequest: CreateEmployeeRequest): Employee {
    const createdEmployee: Employee = { ...createEmployeeRequest, id: uuidv4() };
    this.mongoClient.updateCollection('employees', 'test', createdEmployee);
    return createdEmployee;
  }
  updateEmployee(updateEmployeeRequest: Employee): Employee {
    this.mongoClient.updateCollection('employees', 'test', updateEmployeeRequest);
    return updateEmployeeRequest;
  }
  deleteEmployee(id: number): boolean {
    if (id !== 1234) throw new Error('Employee not found.');
    return true;
  }
}

export default EmployeesService;
