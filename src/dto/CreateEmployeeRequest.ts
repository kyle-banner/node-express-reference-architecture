import Name from './Name';
import Title from './Title';
import Practice from './Practice';

interface CreateEmployeeRequest {
  name: Name;
  title: Title;
  email: string;
  practice: Practice;
}

export default CreateEmployeeRequest;
