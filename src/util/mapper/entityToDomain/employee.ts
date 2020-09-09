import EntityToDomainMapper from './mapper';
import { Employee as EmployeeEntity } from '../../../entity/Employee';
import EmployeeDto from 'src/dto/Employee';

const mapper = new EntityToDomainMapper<EmployeeEntity, EmployeeDto>();
mapper.map = (entity) => {
  const employeeDto: EmployeeDto = {
    id: entity.id,
    name: {
      firstName: entity.firstName,
      lastName: entity.lastName,
    },
    title: entity.title,
    email: entity.email,
    practice: entity.practice,
  };
  return employeeDto;
};

export default mapper;
