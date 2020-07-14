import Address from './Address';
import Employee from './Employee';

interface Meeting {
  id: string;
  address?: Address;
  employeeIds: string[];
  scheduledTime: string;
}

export default Meeting;
