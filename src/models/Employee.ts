import Name from './PersonName';
import Company from './Company';

interface Employee {
  id: number;
  name: Name;
  employer: Company;
  email: string;
}

export default Employee;
