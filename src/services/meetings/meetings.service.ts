import { injectable, inject } from 'inversify';
import { TYPES } from '../../types';
import CreateMeetingRequest from '@models/CreateMeetingRequest';
import Address from '@models/Address';
import UpdateMeetingResponse from '@models/UpdateMeetingResponse';
import IMongoClient from 'src/util/mongoClient.interface';
import IMeetingsService from './meetings.interface';
import Meeting from '@models/Meeting';
import { create } from 'domain';

@injectable()
class MeetingsService implements IMeetingsService {
  private mongoClient: IMongoClient;

  constructor(@inject(TYPES.MongoClient) injectedMongoClient: IMongoClient) {
    this.mongoClient = injectedMongoClient;
  }

  async getMeetings(): Promise<any[]> {
    return await this.mongoClient.getCollection('meetings', 'test');
  }
  getMeetingById(id: string): Promise<any> {
    throw new Error('Method not implemented.');
  }
  async createMeeting(createMeetingRequest: CreateMeetingRequest): Promise<any> {
    await this.mongoClient.updateCollection('meetings', 'test', createMeetingRequest);
    return createMeetingRequest;
  }
  async updateMeeting(updateMeetingRequest: Meeting): Promise<UpdateMeetingResponse> {
    let meetingPreviouslyExisted = false;
    const meetingArray = await this.mongoClient.getResource('meetings', 'test', { id: updateMeetingRequest.id });
    if (meetingArray.length) {
      meetingPreviouslyExisted = true;
      meetingArray.forEach(async (meeting: Meeting) => {
        await this.mongoClient.deleteResource('employees', 'test', { id: updateMeetingRequest.id });
      });
    }
    this.mongoClient.updateCollection('employees', 'test', updateMeetingRequest);
    return { previouslyExisted: meetingPreviouslyExisted, ...updateMeetingRequest };
  }
  deleteMeeting(id: string): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
}

export default MeetingsService;
