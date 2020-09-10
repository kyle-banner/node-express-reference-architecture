import Employee from './Employee';

interface UpdateEmployeeResponse extends Employee {
  previouslyExisted: boolean;
}

export default UpdateEmployeeResponse;
