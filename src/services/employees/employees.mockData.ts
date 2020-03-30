import Employee from '../../models/Employee';

const kyleBanner: Employee = {
  id: 1234,
  name: {
    firstName: 'Kyle',
    middleName: 'Daniel',
    lastName: 'Banner',
    alias: 'kyle.banner',
  },
  employer: {
    id: 2345,
    name: 'Slalom',
  },
  email: 'kyle.banner@slalom.com',
};

const employees: Employee[] = [kyleBanner];

export default employees;
