import { createConnection } from 'typeorm';
import { Meeting as MeetingEntity } from '../src/entity/Meeting';
import { Employee as EmployeeEntity } from '../src/entity/Employee';

createConnection()
  .then(async (connection) => {
    const meeting = {
      scheduledTime: '2020-09-08T04:46:46+0000',
    };
    const meetingRepository = connection.getRepository(MeetingEntity);
    await meetingRepository.save(meeting);
    console.log('saved meeting');
    const employee = {
      id: 1234,
    };
    const employeeRepository = connection.getRepository(EmployeeEntity);
    await employeeRepository.save(employee);
    console.log('saved employee');
  })
  // tslint:disable-next-line:no-console
  .catch((error) => console.log(error));
