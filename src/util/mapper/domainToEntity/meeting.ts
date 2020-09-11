import { Meeting as MeetingEntity } from '../../../entity/Meeting';
import MeetingDto from 'src/dto/Meeting';
import DomainToEntityMapper from './mapper';

const mapper = new DomainToEntityMapper<MeetingDto, MeetingEntity>();
mapper.map = (dto: MeetingDto) => {
  const meetingEntity: MeetingEntity = {
    id: dto.id,
    hostEmployeeId: dto.employees[0],
    joiningEmployeeId: dto.employees[1],
    scheduledTime: dto.scheduledTime,
    address: dto.address
  };
  return meetingEntity;
};

export default mapper;
