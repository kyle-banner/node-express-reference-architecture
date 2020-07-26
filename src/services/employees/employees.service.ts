import { injectable, inject } from 'inversify';
import { TYPES } from '../../types';
import IEmployeesService from './employees.interface';
import Employee from '@models/Employee';
import CreateEmployeeRequest from '@models/CreateEmployeeRequest';
import UpdateEmployeeResponse from '@models/UpdateEmployeeResponse';
import { v4 as uuidv4 } from 'uuid';
// import IMongoClient from 'src/util/mongoClient.interface';
import SqlDatabaseClient from '../../util/sqlDatabaseClient';
import EmployeesController from './employees.controller';
import Title from '@models/Title';
import Practice from '@models/Practice';

@injectable()
class EmployeesService implements IEmployeesService {
  // private mongoClient: IMongoClient;

  constructor(/*@inject(TYPES.MongoClient) injectedMongoClient: IMongoClient*/) {
    // this.mongoClient = injectedMongoClient;
  }

  async getEmployees(): Promise<Employee[]> {
    // const db = new SqlDatabaseClient();
    // const sequelize = db.getSequelize();

    // console.log(JSON.stringify(sequelize));

    const employee = {
      id: 'id',
      name: {
        firstName: 'firstname',
        lastName: 'lastname'
      },
      title: Title.AN,
      email: 'asdf@asdf.com',
      practice: Practice.BAS
    };
    return [employee];
    // return await this.mongoClient.getCollection('employees', 'test');
  }

  async getEmployeeById(id: string): Promise<Employee | undefined> {
    return undefined;
    // const employee = await this.mongoClient.getResource('employees', 'test', { id });
    // return employee;
  }

  async createEmployee(createEmployeeRequest: CreateEmployeeRequest): Promise<Employee> {
    return {
      id: "1234",
      name: {
        firstName: "Kyle",
        lastName: "Banner",
      },
      title: Title.GM,
      practice: Practice.TE,
      email: "kyle.d.banner@gmail.com",
    };
    // const createdEmployee: Employee = { ...createEmployeeRequest, id: uuidv4() };
    // await this.mongoClient.updateCollection('employees', 'test', createdEmployee);
    // return createdEmployee;
  }

  async updateEmployee(updateEmployeeRequest: Employee): Promise<UpdateEmployeeResponse> {
    return {
      id: "1234",
      previouslyExisted: false,
      name: {
        firstName: "Kyle",
        lastName: "Banner",
      },
      title: Title.GM,
      practice: Practice.TE,
      email: "kyle.d.banner@gmail.com",
    };
    // let employeePreviouslyExisted = false;
    // const employeeArray = await this.mongoClient.getResource('employees', 'test', { id: updateEmployeeRequest.id });
    // if (employeeArray.length) {
    //   employeePreviouslyExisted = true;
    //   employeeArray.forEach(async (employee: Employee) => {
    //     await this.mongoClient.deleteResource('employees', 'test', { id: employee.id });
    //   });
    // }
    // this.mongoClient.updateCollection('employees', 'test', updateEmployeeRequest);
    // return { previouslyExisted: employeePreviouslyExisted, ...updateEmployeeRequest };
  }

  async deleteEmployee(id: string): Promise<boolean> {
    return true;
    // return await this.mongoClient.deleteResource('employees', 'test', { id });
  }
}

export default EmployeesService;
