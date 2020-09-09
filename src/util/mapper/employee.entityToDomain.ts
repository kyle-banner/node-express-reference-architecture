import EntityToDomainMapper from './entityToDomainGenericMapper';
import { Employee as EmployeeEntity } from '../../entity/Employee';
import EmployeeModel from '@models/Employee';

const mapper = new EntityToDomainMapper<EmployeeEntity, EmployeeModel>();
mapper.map = (entity) => {
    const employeeDto: EmployeeModel = {
        id: entity.id.toString(),
        name: {
            firstName: entity.firstName,
            lastName: entity.lastName
        },
        title: entity.title,
        email: entity.email,
        practice: entity.practice,
        };
    return employeeDto;
}

export default mapper;