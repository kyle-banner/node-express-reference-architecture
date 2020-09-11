import { injectable } from 'inversify';
import IMeetingsService from './meetings.interface';
import { getRepository } from 'typeorm';
import MeetingDto from 'src/dto/Meeting';
import { Meeting as MeetingEntity } from '../../entity/Meeting';
import { Address as AddressEntity } from '../../entity/Address';
import { meeting as meetingEntityToDomainMapper } from '../../util/mapper/entityToDomain';
import { meeting as meetingDomainToEntityMapper } from '../../util/mapper/domainToEntity';

@injectable()
class MeetingsService implements IMeetingsService {
  private meetingRepository = getRepository(MeetingEntity);
  private addressRepository = getRepository(AddressEntity);

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
    const meetingEntity = meetingDomainToEntityMapper.map(createMeetingRequest);
    const entityResponse = await this.meetingRepository.save(meetingEntity);
    return meetingEntityToDomainMapper.map(entityResponse);
  }

  async updateMeeting(updateMeetingRequest: MeetingDto): Promise<MeetingDto> {
    const meetingEntityToSave = meetingDomainToEntityMapper.map(updateMeetingRequest);
    const meetingEntity = await this.meetingRepository.findOne(meetingEntityToSave.id);
    let updatedMeetingEntity: MeetingEntity;
    if (meetingEntity && meetingEntity.id) {
      await this.meetingRepository.update(meetingEntity.id, meetingEntityToSave); // bug here where address is not saved, cascade on update isn't working
      updatedMeetingEntity = meetingEntityToSave;
    } else {
      updatedMeetingEntity = await this.meetingRepository.save(meetingEntityToSave);
    }
    return meetingEntityToDomainMapper.map(updatedMeetingEntity);
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
