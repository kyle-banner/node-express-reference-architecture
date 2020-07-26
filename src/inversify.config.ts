import { Container } from 'inversify';
import { TYPES } from './types';
import Controller from './controller';
import IEmployeesService from './services/employees/employees.interface';
import IMeetingsService from './services/meetings/meetings.interface';
import EmployeesService from './services/employees/employees.service';
import MeetingsService from './services/meetings/meetings.service';
import EmployeesController from './services/employees/employees.controller';
import MeetingsController from './services/meetings/meetings.controller';
// import IMongoClient from './util/mongoClient.interface';
// import MongoClient from './util/mongoClient';

const container: Container = new Container();
container.bind<IEmployeesService>(TYPES.EmployeesService).to(EmployeesService);
container.bind<IMeetingsService>(TYPES.MeetingsService).to(MeetingsService);
// container.bind<IMongoClient>(TYPES.MongoClient).to(MongoClient);
container.bind<Controller>(TYPES.EmployeesController).to(EmployeesController);
container.bind<Controller>(TYPES.MeetingsController).to(MeetingsController);
// TODO: set up mocking switch in here

export default container;
