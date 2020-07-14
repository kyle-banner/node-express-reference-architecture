import Meeting from '@models/Meeting';
import UpdateEmployeeResponse from '@models/UpdateEmployeeResponse';
import CreateMeetingRequest from '@models/CreateMeetingRequest';

interface IMeetingsService {
  getMeetings(): Promise<Meeting[]>;
  getMeetingById(id: string): Promise<Meeting | undefined>;
  createMeeting(createMeetingRequest: CreateMeetingRequest): Promise<Meeting>;
  updateMeeting(id: string): Promise<UpdateEmployeeResponse>;
  deleteMeeting(id: string): Promise<boolean>;
}

export default IMeetingsService;
