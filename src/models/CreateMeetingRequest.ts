import Address from './Address';

interface CreateMeetingRequest {
  address?: Address;
  employeeIds: string[];
  scheduledTime: string;
}

export default CreateMeetingRequest;
