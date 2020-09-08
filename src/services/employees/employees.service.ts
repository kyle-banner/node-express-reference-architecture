import { injectable } from 'inversify';
import IEmployeesService from './employees.interface';
import Employee from '@models/Employee';
import CreateEmployeeRequest from '@models/CreateEmployeeRequest';
import UpdateEmployeeResponse from '@models/UpdateEmployeeResponse';
import { Employee as EmployeeEntity } from '../../entity/Employee';
import { getRepository } from 'typeorm';

@injectable()
class EmployeesService implements IEmployeesService {
  private employeeRepository = getRepository(EmployeeEntity);

  async getEmployees(): Promise<EmployeeEntity[]> { // this should be Employee type
    return await this.employeeRepository.find();
  }

  async getEmployeeById(id: string): Promise<EmployeeEntity | undefined> {
    return await this.employeeRepository.findOne(id);
  }

  async createEmployee(createEmployeeRequest: CreateEmployeeRequest): Promise<EmployeeEntity> {
    return await this.employeeRepository.save({});
  }

  async updateEmployee(updateEmployeeRequest: Employee): Promise<UpdateEmployeeResponse> {
    let previouslyExisted = false;
    const employee = await this.employeeRepository.findOne(updateEmployeeRequest.id);
    if (employee) {
      previouslyExisted = true;
      await this.employeeRepository.remove(employee);
    }
    await this.employeeRepository.save({});
    return { previouslyExisted, ...updateEmployeeRequest };
  }

  async deleteEmployee(id: string): Promise<boolean> {
    const employee = await this.employeeRepository.findOne(id);
    if (employee) {
      await this.employeeRepository.remove(employee);
      return true;
    }
    return false;
  }
}

export default EmployeesService;
