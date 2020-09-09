import { injectable } from 'inversify';
import CreateMeetingRequest from 'src/dto/CreateMeetingRequest';
import UpdateMeetingResponse from 'src/dto/UpdateMeetingResponse';
import IMeetingsService from './meetings.interface';
import { getRepository } from 'typeorm';
import Meeting from 'src/dto/Meeting';
import { Meeting as MeetingEntity } from '../../entity/Meeting';

@injectable()
class MeetingsService implements IMeetingsService {
  private meetingRepository = getRepository(MeetingEntity);

  async getMeetings(): Promise<any[]> {
    return await this.meetingRepository.find();
  }

  async getMeetingById(id: string): Promise<any> {
    return await this.meetingRepository.findOne(id);
  }

  async createMeeting(createMeetingRequest: CreateMeetingRequest): Promise<any> {
    return await this.meetingRepository.save({ scheduledTime: createMeetingRequest.scheduledTime });
  }

  async updateMeeting(updateMeetingRequest: Meeting): Promise<UpdateMeetingResponse> {
    let previouslyExisted = false;
    const meeting = await this.meetingRepository.findOne(updateMeetingRequest.id);
    if (meeting) {
      previouslyExisted = true;
      await this.meetingRepository.remove(meeting);
    }
    await this.meetingRepository.save({ scheduledTime: updateMeetingRequest.scheduledTime });
    return { previouslyExisted, ...updateMeetingRequest };
  }

  async deleteMeeting(id: string): Promise<boolean> {
    const meeting = await this.meetingRepository.findOne(id);
    if (meeting) {
      await this.meetingRepository.remove(meeting);
      return true;
    }
    return false;
  }
}

export default MeetingsService;
