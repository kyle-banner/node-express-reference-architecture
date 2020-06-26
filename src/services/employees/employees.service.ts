import { injectable, inject } from 'inversify';
import { TYPES } from '../../types';
import IEmployeesService from './employees.interface';
import Employee from '@models/Employee';
import CreateEmployeeRequest from '@models/CreateEmployeeRequest';
import UpdateEmployeeResponse from '@models/UpdateEmployeeResponse';
import { v4 as uuidv4 } from 'uuid';
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
    const employee = await this.mongoClient.getResource('employees', 'test', { id });
    return employee;
  }

  async createEmployee(createEmployeeRequest: CreateEmployeeRequest): Promise<Employee> {
    const createdEmployee: Employee = { ...createEmployeeRequest, id: uuidv4() };
    await this.mongoClient.updateCollection('employees', 'test', createdEmployee);
    return createdEmployee;
  }

  async updateEmployee(updateEmployeeRequest: Employee): Promise<UpdateEmployeeResponse> {
    let employeePreviouslyExisted = false;
    const employeeArray = await this.mongoClient.getResource('employees', 'test', { id: updateEmployeeRequest.id });
    if (employeeArray.length) {
      employeePreviouslyExisted = true;
      employeeArray.forEach(async (employee: Employee) => {
        await this.mongoClient.deleteResource('employees', 'test', { id: employee.id });
      });
    }
    this.mongoClient.updateCollection('employees', 'test', updateEmployeeRequest);
    return { previouslyExisted: employeePreviouslyExisted, ...updateEmployeeRequest };
  }

  async deleteEmployee(id: string): Promise<boolean> {
    return await this.mongoClient.deleteResource('employees', 'test', { id });
  }
}

export default EmployeesService;
