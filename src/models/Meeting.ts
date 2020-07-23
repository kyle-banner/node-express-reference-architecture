import Address from './Address';

interface Meeting {
  id: string;
  address?: Address;
  employeeIds: string[];
  scheduledTime: string;
}

export default Meeting;
