import { injectable, inject } from 'inversify';
import { TYPES } from '../../types';
import CreateMeetingRequest from '@models/CreateMeetingRequest';
import Address from '@models/Address';
import UpdateEmployeeResponse from '@models/UpdateEmployeeResponse';
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
    // employees: Employee[], address?: Address
    const createdMeeting: Meeting = {
      id: 'asdf',
      address: {
        id: 'hjkl',
        line1: '1634 18th St',
        city: 'Denver',
        state: 'CO',
        zipCode: 80202,
      },
      employeeIds: ['1234', '5678'],
      scheduledTime: new Date().toISOString(),
    };
    await this.mongoClient.updateCollection('meetings', 'test', createdMeeting);
    return createdMeeting;
  }
  updateMeeting(id: string): Promise<UpdateEmployeeResponse> {
    throw new Error('Method not implemented.');
  }
  deleteMeeting(id: string): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
}

export default MeetingsService;
