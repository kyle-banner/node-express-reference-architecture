import EntityToDomainMapper from './mapper';
import { Meeting as MeetingEntity } from '../../../entity/Meeting';
import MeetingDto from 'src/dto/Meeting';
import DomainToEntityMapper from './mapper';

const mapper = new DomainToEntityMapper<MeetingDto, MeetingEntity>();
mapper.map = (dto: MeetingDto) => {
  const meetingEntity: MeetingEntity = {
    id: dto.id,
    hostEmployeeId: dto.employeeIds[0],
    joiningEmployeeId: dto.employeeIds[1],
    scheduledTime: dto.scheduledTime,
    address: dto.address
  };
  return meetingEntity;
};

export default mapper;
