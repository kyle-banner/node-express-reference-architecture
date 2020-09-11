/* tslint:disable:no-console */
import { createConnection } from 'typeorm';
import { Meeting as MeetingEntity } from '../entity/Meeting';
import { Employee as EmployeeEntity } from '../entity/Employee';
import Title from 'src/dto/Title';
import Practice from 'src/dto/Practice';
import { employee as employeeEntityToDomainMapper, meeting as meetingEntityToDomainMapper } from '../util/mapper/entityToDomain';

createConnection()
  .then(async (connection) => {
    const employeeRepository = connection.getRepository(EmployeeEntity);
    const meetingRepository = connection.getRepository(MeetingEntity);

    const kyle: EmployeeEntity = {
      firstName: 'Kyle',
      lastName: 'Banner',
      title: Title.SA,
      email: 'kyle.banner@slalom.com',
      practice: Practice.TE,
    };
    const savedEmployee1 = await employeeRepository.save(kyle);

    const josh: EmployeeEntity = {
      firstName: 'Josh',
      lastName: 'Prouty',
      title: Title.CO,
      email: 'joshua.prouty@slalom.com',
      practice: Practice.DL,
    };
    const savedEmployee2 = await employeeRepository.save(josh);

    let meeting: MeetingEntity;
    if (savedEmployee1.id && savedEmployee2.id) {
      meeting = {
        scheduledTime: '2020-09-08T04:46:46+0000',
        address: {
          line1: "1634 18th St.",
          city: "Denver",
          state: "Colorado",
          zipCode: 80202
        },
        hostEmployeeId: savedEmployee1.id,
        joiningEmployeeId: savedEmployee2.id
      };
      await meetingRepository.save(meeting);
    }
    // console.log(meeting);
    // console.log(meetingEntityToDomainMapper.map(meeting));
  })
  .catch((error) => console.log(error));
