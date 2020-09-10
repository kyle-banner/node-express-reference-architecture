import Address from './Address';

interface UpdateMeetingResponse {
  previouslyExisted: boolean;
  id: number;
  address?: Address;
  scheduledTime: string;
}

export default UpdateMeetingResponse;
