import Employee from '@models/Employee';
import Practice from '@models/Practice';
import Title from '@models/Title';

const kyleBanner: Employee = {
  id: 'aaaaaaaa-3b7d-4bad-9bdd-2b0d7b3dcb6d',
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
  id: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
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
