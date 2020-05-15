import Employee from '@models/Employee';

const kyleBanner: Employee = {
  id: 1234,
  name: {
    firstName: 'Kyle',
    middleName: 'Daniel',
    lastName: 'Banner',
    alias: '',
  },
  employer: {
    id: 5678,
    name: 'Slalom',
  },
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
  employer: {
    id: 5678,
    name: 'Slalom',
  },
  email: 'ryan.bray@slalom.com',
};

const employee: Employee = kyleBanner;
const employees: Employee[] = [kyleBanner, ryanBray];

export { employee, employees };
