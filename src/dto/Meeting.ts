import Address from './Address';

interface Meeting {
  id?: string;
  address: Address;
  employees: string[];
  scheduledTime: string;
}

export default Meeting;
