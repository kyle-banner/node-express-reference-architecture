import DomainToEntityMapper from './mapper';
import { Employee as EmployeeEntity } from '../../../entity/Employee';
import EmployeeDto from 'src/dto/Employee';

const mapper = new DomainToEntityMapper<EmployeeDto, EmployeeEntity>();
mapper.map = (dto: EmployeeDto) => {
  const employeeEntity: EmployeeEntity = {
    id: dto.id,
    firstName: dto.name.firstName,
    lastName: dto.name.lastName,
    title: dto.title,
    email: dto.email,
    practice: dto.practice,
  };
  return employeeEntity;
};

export default mapper;
