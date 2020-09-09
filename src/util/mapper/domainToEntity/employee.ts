import EntityToDomainMapper from './mapper';
import { Employee as EmployeeEntity } from '../../../entity/Employee';
import EmployeeModel from '@models/Employee';

const mapper = new EntityToDomainMapper<EmployeeModel, EmployeeEntity>();
mapper.map = (dto: EmployeeModel) => {
    const employeeEntity: EmployeeEntity = {
        id: dto.id,
        firstName: dto.name.firstName,
        lastName: dto.name.lastName,
        title: dto.title,
        email: dto.email,
        practice: dto.practice,
    };
    return employeeEntity;
}

export default mapper;