/* tslint:disable:no-console */
import { createConnection } from 'typeorm';
import { Meeting as MeetingEntity } from '../entity/Meeting';
import { Employee as EmployeeEntity } from '../entity/Employee';
import Title from 'src/dto/Title';
import Practice from 'src/dto/Practice';
import { employee as employeeEntityToDomainMapper, meeting as meetingEntityToDomainMapper } from '../util/mapper/entityToDomain';

createConnection()
  .then(async (connection) => {
    const meeting: MeetingEntity = {
      scheduledTime: '2020-09-08T04:46:46+0000',
      id: 1234,
      address: {
        id: 5678,
        line1: "1234 Main St.",
        city: "Houston",
        state: "Texas",
        zipCode: 77065
      },
      hostEmployeeId: 1,
      joiningEmployeeId: 2
    };
    const meetingRepository = connection.getRepository(MeetingEntity);
    await meetingRepository.save(meeting);
    console.log('saved meeting');

    console.log(meeting);
    console.log(meetingEntityToDomainMapper.map(meeting));

    const employee: EmployeeEntity = {
      id: 1234,
      firstName: 'Kyle',
      lastName: 'Banner',
      title: Title.SA,
      email: 'kyle.banner@slalom.com',
      practice: Practice.TE,
    };
    const employeeRepository = connection.getRepository(EmployeeEntity);
    await employeeRepository.save(employee);

    console.log('saved employee');

    console.log(employee);
    console.log(employeeEntityToDomainMapper.map(employee));
  })
  .catch((error) => console.log(error));
