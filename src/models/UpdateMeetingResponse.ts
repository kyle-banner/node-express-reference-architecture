import Address from './Address';

interface UpdateEmployeeResponse {
  previouslyExisted: boolean;
  id: string;
  address?: Address;
  employeeIds: string[];
  scheduledTime: string;
}

export default UpdateEmployeeResponse;
