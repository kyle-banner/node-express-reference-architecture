import { Container } from 'inversify';
import { TYPES } from './types';
import Controller from './controller';
import IEmployeesService from './services/employees/employees.interface';
import IEncountersService from './services/encounters/encounters.interface';
import EmployeesService from './services/employees/employees.service';
import EncountersService from './services/encounters/encounters.service';
import EmployeesController from './services/employees/employees.controller';
import EncountersController from './services/encounters/encounters.controller';
import IMongoClient from './util/mongoClient.interface';
import MongoClient from './util/mongoClient';

const container: Container = new Container();
container.bind<IEmployeesService>(TYPES.EmployeesService).to(EmployeesService);
container.bind<IEncountersService>(TYPES.EncountersService).to(EncountersService);
container.bind<IMongoClient>(TYPES.MongoClient).to(MongoClient);
container.bind<Controller>(TYPES.EmployeesController).to(EmployeesController);
container.bind<Controller>(TYPES.EncountersController).to(EncountersController);
// TODO: set up mocking switch in here

export default container;
