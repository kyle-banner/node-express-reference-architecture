import EntityToDomainMapper from './mapper';
import { Meeting as MeetingEntity } from '../../../entity/Meeting';
import MeetingDto from 'src/dto/Meeting';

const mapper = new EntityToDomainMapper<MeetingEntity, MeetingDto>();
mapper.map = (entity: MeetingEntity) => {
  const meetingDto: MeetingDto = {
    id: entity.id,
    employees: [entity.hostEmployeeId, entity.joiningEmployeeId],
    scheduledTime: entity.scheduledTime,
    address: entity.address,
  };
  return meetingDto;
};

export default mapper;
