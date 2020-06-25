import { MongoClient as mongo } from 'mongodb';
import { injectable, inject } from 'inversify';
import { TYPES } from '../../types';
import IEmployeesService from './employees.interface';
import Employee from '@models/Employee';
import CreateEmployeeRequest from '@models/CreateEmployeeRequest';
import { employee } from './employees.mockData';
import Name from '@models/Name';
import Title from '@models/Title';
import Practice from '@models/Practice';
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
  getEmployeeById(id: number): Employee | undefined {
    if (id === 1234) {
      return employee;
    }
    return undefined;
  }
  createEmployee(createEmployeeRequest: CreateEmployeeRequest): Employee {
    // TODO: clean up model and pass all the way through instead of updating here
    const createdEmployee: Employee = {
      id: Math.floor(Math.random() * 10000),
      name: createEmployeeRequest.name,
      email: createEmployeeRequest.email,
      title: Title.AN,
      practice: Practice.OE,
    };
    this.mongoClient.updateCollection('employees', 'test', createdEmployee);
    return createdEmployee;
  }
  updateEmployeeName(name: Name): Employee {
    const updatedEmployee: Employee = {
      id: 6789,
      name,
      email: 'example1234@company.com',
      title: Title.SP,
      practice: Practice.DA,
    };
    return updatedEmployee;
  }
  updateEmployeeEmail(email: string): Employee {
    const updatedEmployee: Employee = {
      id: 6789,
      name: {
        firstName: 'John',
        lastName: 'Smith',
      },
      email,
      title: Title.SA,
      practice: Practice.DL,
    };
    return updatedEmployee;
  }
  deleteEmployee(id: number): boolean {
    if (id !== 1234) throw new Error('Employee not found.');
    return true;
  }
}

export default EmployeesService;
