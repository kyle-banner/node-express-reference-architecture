import MeetingDto from 'src/dto/Meeting';

interface IMeetingsService {
  getMeetings(): Promise<MeetingDto[]>;
  getMeetingById(id: string): Promise<MeetingDto | undefined>;
  createMeeting(createMeetingRequest: MeetingDto): Promise<MeetingDto>;
  updateMeeting(updateMeetingRequest: MeetingDto): Promise<MeetingDto>;
  deleteMeeting(id: string): Promise<MeetingDto | undefined>;
}

export default IMeetingsService;
