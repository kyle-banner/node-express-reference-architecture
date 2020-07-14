import Employee from './Employee';
import Address from './Address';

interface CreateMeetingRequest {
  employees: Employee[];
  scheduledTime: Date;
  address?: Address;
}

export default CreateMeetingRequest;
