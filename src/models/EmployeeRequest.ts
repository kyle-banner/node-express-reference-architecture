import Name from './PersonName';

interface EmployeeRequest {
  name: Name;
  employerName: string;
  email: string;
}

export default EmployeeRequest;
