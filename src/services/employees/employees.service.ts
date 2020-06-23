/* tslint:disable */
import { MongoClient as mongo } from 'mongodb';
import { injectable } from 'inversify';
import IEmployeesService from './employees.interface';
import Employee from '@models/Employee';
import CreateEmployeeRequest from '@models/CreateEmployeeRequest';
import { employees, employee } from './employees.mockData';
import Name from '@models/Name';
import Title from '@models/Title';
import Practice from '@models/Practice';

@injectable()
class EmployeesService implements IEmployeesService {
  getEmployees(): Employee[] {
    return employees;
  }
  getEmployeeById(id: number): Employee | undefined {
    if (id === 1234) {
      return employee;
    }
    return undefined;
  }
  createEmployee(createEmployeeRequest: CreateEmployeeRequest): Employee {
    mongo.connect(
      'mongodb://localhost:27017',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      async (err, client) => {
        if (err) {
          console.error(err);
          return;
        }
        const collections = await client.db('test').listCollections().toArray();
        console.log(collections);
        const collection = await client.db('test').collection('asdf');
        collection.insertOne({ name: 'Kyle' }, (err, result) => {
          console.log('inserted');
          console.log(result);
        });
        collection.find().toArray((err, items) => {
          console.log(items);
        });
      }
    );
    const createdEmployee: Employee = {
      id: 6789,
      name: createEmployeeRequest.name,
      email: createEmployeeRequest.email,
      title: Title.AN,
      practice: Practice.OE,
    };
    return createdEmployee;
  }
  updateEmployeeName(name: Name): Employee {
    const updatedEmployee: Employee = {
      id: 6789,
      name,
      email: 'example1234@company.com',
      title: Title.SP,
      practice: Practice.DA,
    };
    return updatedEmployee;
  }
  updateEmployeeEmail(email: string): Employee {
    const updatedEmployee: Employee = {
      id: 6789,
      name: {
        firstName: 'John',
        lastName: 'Smith',
      },
      email,
      title: Title.SA,
      practice: Practice.DL,
    };
    return updatedEmployee;
  }
  deleteEmployee(id: number): boolean {
    if (id !== 1234) throw new Error('Employee not found.');
    return true;
  }
}

export default EmployeesService;
