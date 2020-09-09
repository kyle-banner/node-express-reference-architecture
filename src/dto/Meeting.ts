import Address from './Address';

interface Meeting {
  id: number;
  address: Address;
  employeeIds: number[];
  scheduledTime: string;
}

export default Meeting;
