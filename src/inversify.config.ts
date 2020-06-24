import { Container } from 'inversify';
import { TYPES } from './types';
import Controller from './controller';
import IEmployeesService from './services/employees/employees.interface';
import EmployeesService from './services/employees/employees.service';
import EmployeesController from './services/employees/employees.controller';
import IMongoClient from './util/mongoClient.interface';
import MongoClient from './util/mongoClient';

const container: Container = new Container();
container.bind<IEmployeesService>(TYPES.EmployeesService).to(EmployeesService);
container.bind<IMongoClient>(TYPES.MongoClient).to(MongoClient);
container.bind<Controller>(TYPES.EmployeesController).to(EmployeesController);
// set up mocking switch in here

export default container;
