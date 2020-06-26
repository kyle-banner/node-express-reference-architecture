import Name from './Name';
import Practice from './Practice';
import Title from './Title';

interface Employee {
  id: string;
  name: Name;
  title: Title;
  email: string;
  practice: Practice;
}

export default Employee;
