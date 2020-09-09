import Meeting from 'src/dto/Meeting';
import UpdateMeetingResponse from 'src/dto/UpdateMeetingResponse';
import CreateMeetingRequest from 'src/dto/CreateMeetingRequest';

interface IMeetingsService {
  getMeetings(): Promise<Meeting[]>;
  getMeetingById(id: string): Promise<Meeting | undefined>;
  createMeeting(createMeetingRequest: CreateMeetingRequest): Promise<Meeting>;
  updateMeeting(updateMeetingRequest: Meeting): Promise<UpdateMeetingResponse>;
  deleteMeeting(id: string): Promise<boolean>;
}

export default IMeetingsService;
