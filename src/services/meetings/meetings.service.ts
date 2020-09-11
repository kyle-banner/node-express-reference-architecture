import { injectable } from 'inversify';
import IMeetingsService from './meetings.interface';
import { getRepository } from 'typeorm';
import MeetingDto from 'src/dto/Meeting';
import { Meeting as MeetingEntity } from '../../entity/Meeting';
import { meeting as meetingEntityToDomainMapper } from '../../util/mapper/entityToDomain';
import { meeting as meetingDomainToEntityMapper } from '../../util/mapper/domainToEntity';

@injectable()
class MeetingsService implements IMeetingsService {
  private meetingRepository = getRepository(MeetingEntity);

  async getMeetings(): Promise<MeetingDto[]> {
    const meetingEntities = await this.meetingRepository.find({join: {
      alias: "meeting",
      leftJoinAndSelect: {
          address: "meeting.address",
          host: "meeting.hostEmployeeId",
          joining: "meeting.joiningEmployeeId"
        }
    }});
    if (meetingEntities.length) {
      const meetingDtos: MeetingDto[] = [];
      meetingEntities.forEach(entity => {
        meetingDtos.push(meetingEntityToDomainMapper.map(entity));
      });
      return meetingDtos;
    }
    return [];
  }

  async getMeetingById(id: string): Promise<MeetingDto | undefined> {
    const meetingEntity = await this.meetingRepository.findOne(id, {join: {
      alias: "meeting",
      leftJoinAndSelect: {
          address: "meeting.address",
          host: "meeting.hostEmployeeId",
          joining: "meeting.joiningEmployeeId"
        }
    }});
    if (meetingEntity) return meetingEntityToDomainMapper.map(meetingEntity);
    return undefined;
  }

  async createMeeting(createMeetingRequest: MeetingDto): Promise<MeetingDto> {
    const employeeEntity = meetingDomainToEntityMapper.map(createMeetingRequest); // the id should not be required here (in controller)
    const entityResponse = await this.meetingRepository.save(employeeEntity);
    return meetingEntityToDomainMapper.map(entityResponse);
  }

  async updateMeeting(updateMeetingRequest: MeetingDto): Promise<MeetingDto> {
    const meetingEntityToSave = meetingDomainToEntityMapper.map(updateMeetingRequest);
    const employeeEntity = await this.meetingRepository.findOne(meetingEntityToSave.id);
    let updatedEmployeeEntity: MeetingEntity;
    if (employeeEntity && employeeEntity.id) {
      await this.meetingRepository.update(employeeEntity.id, meetingEntityToSave);
      updatedEmployeeEntity = meetingEntityToSave;
    } else {
      updatedEmployeeEntity = await this.meetingRepository.save(meetingEntityToSave);
    }
    return meetingEntityToDomainMapper.map(updatedEmployeeEntity);
  }

  async deleteMeeting(id: string): Promise<MeetingDto | undefined> {
    const meetingEntity = await this.meetingRepository.findOne(id);
    if (meetingEntity) {
      await this.meetingRepository.remove(meetingEntity);
      return meetingEntityToDomainMapper.map(meetingEntity);
    }
    return undefined;
  }
}

export default MeetingsService;
