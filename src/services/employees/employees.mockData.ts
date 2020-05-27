import Employee from '@models/Employee';
import Practice from '@models/Practice';
import Title from '@models/Title';

const kyleBanner: Employee = {
  id: 1234,
  name: {
    firstName: 'Kyle',
    middleName: 'Daniel',
    lastName: 'Banner',
  },
  practice: Practice.TE,
  title: Title.SA,
  email: 'kyle.banner@slalom.com',
};

const ryanBray: Employee = {
  id: 2345,
  name: {
    firstName: 'Ryan',
    middleName: '',
    lastName: 'Bray',
    alias: '',
  },
  practice: Practice.TE,
  title: Title.SP,
  email: 'ryan.bray@slalom.com',
};

const employee: Employee = kyleBanner;
const employees: Employee[] = [kyleBanner, ryanBray];

export { employee, employees };
