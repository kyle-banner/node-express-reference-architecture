import Address from './Address';

interface UpdateEmployeeResponse {
  previouslyExisted: boolean;
  id: number;
  address?: Address;
  scheduledTime: string;
}

export default UpdateEmployeeResponse;
