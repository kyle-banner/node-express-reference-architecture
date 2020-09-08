import { injectable, inject } from 'inversify';
import { TYPES } from '../../types';
import CreateMeetingRequest from '@models/CreateMeetingRequest';
import UpdateMeetingResponse from '@models/UpdateMeetingResponse';
// import IMongoClient from 'src/util/mongoClient.interface';
import IMeetingsService from './meetings.interface';
import { getRepository } from 'typeorm';
import Meeting from '@models/Meeting';
import { Meeting as MeetingEntity } from '../../entity/Meeting';
import { v4 as uuidv4 } from 'uuid';

@injectable()
class MeetingsService implements IMeetingsService {
  // private mongoClient: IMongoClient;
  private meetingRepository = getRepository(MeetingEntity);
  constructor(/*@inject(TYPES.MongoClient) injectedMongoClient: IMongoClient*/) {
    // this.mongoClient = injectedMongoClient;
  }

  async getMeetings(): Promise<any[]> {
    return [];
    // return await this.mongoClient.getCollection('meetings', 'test');
  }

  async getMeetingById(id: string): Promise<any> {
    // throw new Error('Method not implemented.');
    const meeting = await this.meetingRepository.findOne(id);
    console.log(meeting);
    return meeting;
  }

  async createMeeting(createMeetingRequest: CreateMeetingRequest): Promise<any> {
    throw new Error('Method not implemented.');
    // const createdMeeting: Meeting = { ...createMeetingRequest, id: uuidv4() };
    // await this.mongoClient.updateCollection('meetings', 'test', createdMeeting);
    // return createdMeeting;
  }

  async updateMeeting(updateMeetingRequest: Meeting): Promise<UpdateMeetingResponse> {
    // const updateMeetingResponse = {
    //   previouslyExisted: false,
    //   id: '1234',
    //   employeeIds: ['1234', '123'],
    //   scheduledTime: 'adf',
    // };
    // return updateMeetingResponse;
    throw new Error('Method not implemented.');
    // let meetingPreviouslyExisted = false;
    // const meetingArray = await this.mongoClient.getResource('meetings', 'test', { id: updateMeetingRequest.id });
    // if (meetingArray.length) {
    //   meetingPreviouslyExisted = true;
    //   meetingArray.forEach(async (meeting: Meeting) => {
    //     await this.mongoClient.deleteResource('meetings', 'test', { id: meeting.id });
    //   });
    // }
    // await this.mongoClient.updateCollection('meetings', 'test', updateMeetingRequest);
    // return { previouslyExisted: meetingPreviouslyExisted, ...updateMeetingRequest };
  }

  deleteMeeting(id: string): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
}

export default MeetingsService;
