import Address from './Address';
import Employee from './Employee';

interface Encounter {
  id: string;
  address?: Address;
  employeeIds: string[];
}

export default Encounter;
