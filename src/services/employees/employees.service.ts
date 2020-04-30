import { injectable } from 'inversify';
import IEmployeesService from './employees.interface';
import Employee from '../../models/Employee'; // set up auto-routing thing used in project-tanner-smiths
// @ts-ignore
// import db from '../../../database.js';

@injectable()
class EmployeesService implements IEmployeesService {
  getEmployees(): Promise<Employee[]> {
    // const sql = 'select * from user';
    // // @ts-ignore
    // const params = [];
    // // @ts-ignore
    // db.all(sql, params, (err, rows) => {
    //   if (err) {
    //     // res.status(400).json({"error":err.message});
    //     throw err;
    //     return;
    //   }
    //   // tslint:disable-next-line: no-console
    //   console.log('success');
    //   // tslint:disable-next-line: no-console
    //   console.log(rows);
    //   // res.json({
    //   //     "message":"success",
    //   //     "data":rows
    //   // })
    // });
    throw new Error('This is a test. Method not implemented yet.');
  }
  getEmployeeById(id: string): Promise<Employee | undefined> {
    throw new Error('Method not implemented.');
  }
}

export default EmployeesService;
