import Meeting from '@models/Meeting';
import UpdateMeetingResponse from '@models/UpdateMeetingResponse';
import CreateMeetingRequest from '@models/CreateMeetingRequest';

interface IMeetingsService {
  getMeetings(): Promise<Meeting[]>;
  getMeetingById(id: string): Promise<Meeting | undefined>;
  createMeeting(createMeetingRequest: CreateMeetingRequest): Promise<Meeting>;
  updateMeeting(updateMeetingRequest: Meeting): Promise<UpdateMeetingResponse>;
  deleteMeeting(id: string): Promise<boolean>;
}

export default IMeetingsService;
