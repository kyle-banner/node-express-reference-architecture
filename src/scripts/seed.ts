/* tslint:disable:no-console */
import { createConnection } from 'typeorm';
import { Meeting as MeetingEntity } from '../entity/Meeting';
import { Employee as EmployeeEntity } from '../entity/Employee';
import Title from '@models/Title';
import Practice from '@models/Practice';
import { employeeMapper } from '../util/mapper';

createConnection()
  .then(async (connection) => {
    const meeting = {
      scheduledTime: '2020-09-08T04:46:46+0000',
    };
    const meetingRepository = connection.getRepository(MeetingEntity);
    await meetingRepository.save(meeting);
    console.log('saved meeting');

    const employee: EmployeeEntity = {
      id: 1234,
      firstName: "Kyle",
      lastName: "Banner",
      title: Title.SA,
      email: "kyle.banner@slalom.com",
      practice: Practice.TE,
    };
    const employeeRepository = connection.getRepository(EmployeeEntity);
    await employeeRepository.save(employee);

    console.log('saved employee');

    console.log(employee);
    console.log(employeeMapper.map(employee));
  })
  .catch((error) => console.log(error));
