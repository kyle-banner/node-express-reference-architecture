import Address from './Address';

interface UpdateEmployeeResponse {
  previouslyExisted: boolean;
  id: string;
  address?: Address;
  scheduledTime: string;
}

export default UpdateEmployeeResponse;
