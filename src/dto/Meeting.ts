import Address from './Address';

interface Meeting {
  id?: string;
  address: Address;
  employeeIds: number[];
  scheduledTime: string;
}

export default Meeting;
