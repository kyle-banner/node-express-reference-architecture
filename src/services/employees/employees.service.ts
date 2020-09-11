import { injectable } from 'inversify';
import IEmployeesService from './employees.interface';
import EmployeeDto from 'src/dto/Employee';
import { employee as employeeEntityToDomainMapper } from '../../util/mapper/entityToDomain';
import { employee as employeeDomainToEntityMapper } from '../../util/mapper/domainToEntity';
import { Employee as EmployeeEntity } from '../../entity/Employee';
import { getRepository } from 'typeorm';

@injectable()
class EmployeesService implements IEmployeesService {
  private employeeRepository = getRepository(EmployeeEntity);

  async getEmployees(): Promise<EmployeeDto[]> {
    const employeeEntities = await this.employeeRepository.find();
    if (employeeEntities.length) {
      const employeeDtos: EmployeeDto[] = [];
      employeeEntities.forEach(entity => {
        employeeDtos.push(employeeEntityToDomainMapper.map(entity));
      });
      return employeeDtos;
    }
    return [];
  }

  async getEmployeeById(id: string): Promise<EmployeeDto | undefined> {
    const employeeEntity = await this.employeeRepository.findOne(id);
    if (employeeEntity) return employeeEntityToDomainMapper.map(employeeEntity);
    return undefined;
  }

  async createEmployee(createEmployeeRequest: EmployeeDto): Promise<EmployeeDto> {
    const employeeEntity = employeeDomainToEntityMapper.map(createEmployeeRequest);
    const entityResponse = await this.employeeRepository.save(employeeEntity);
    return employeeEntityToDomainMapper.map(entityResponse);
  }

  async updateEmployee(updateEmployeeRequest: EmployeeDto): Promise<EmployeeDto> {
    const employeeEntityToSave = employeeDomainToEntityMapper.map(updateEmployeeRequest);
    const employeeEntity = await this.employeeRepository.findOne(employeeEntityToSave.id);
    let updatedEmployeeEntity: EmployeeEntity;
    if (employeeEntity && employeeEntity.id) {
      await this.employeeRepository.update(employeeEntity.id, employeeEntityToSave);
      updatedEmployeeEntity = employeeEntityToSave;
    } else {
      updatedEmployeeEntity = await this.employeeRepository.save(employeeEntityToSave);
    }
    return employeeEntityToDomainMapper.map(updatedEmployeeEntity);
  }

  async deleteEmployee(id: string): Promise<EmployeeDto | undefined> {
    const employeeEntity = await this.employeeRepository.findOne(id);
    if (employeeEntity) {
      await this.employeeRepository.remove(employeeEntity);
      return employeeEntityToDomainMapper.map(employeeEntity);
    }
    return undefined;
  }
}

export default EmployeesService;
