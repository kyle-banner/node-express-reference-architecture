import { injectable, inject } from 'inversify';
import { TYPES } from '../../types';
import Employee from '@models/Employee';
import Address from '@models/Address';
import UpdateEmployeeResponse from '@models/UpdateEmployeeResponse';
import IMongoClient from 'src/util/mongoClient.interface';
import IEncountersService from './encounters.interface';
import Encounter from '@models/Encounter';
import { create } from 'domain';

@injectable()
class EncountersService implements IEncountersService {
  private mongoClient: IMongoClient;

  constructor(@inject(TYPES.MongoClient) injectedMongoClient: IMongoClient) {
    this.mongoClient = injectedMongoClient;
  }

  async getEncounters(): Promise<any[]> {
    return await this.mongoClient.getCollection('encounters', 'test');
  }
  getEncounterById(id: string): Promise<any> {
    throw new Error('Method not implemented.');
  }
  async createEncounter(employees: Employee[], address?: Address): Promise<any> {
    const createdEncounter: Encounter = {
      id: 'asdf',
      address: {
        id: 'hjkl',
        line1: '1634 18th St',
        city: 'Denver',
        state: 'CO',
        zipCode: 80202,
      },
      employeeIds: ['1234', '5678'],
    };
    await this.mongoClient.updateCollection('encounters', 'test', createdEncounter);
    return createdEncounter;
  }
  updateEncounter(id: string): Promise<UpdateEmployeeResponse> {
    throw new Error('Method not implemented.');
  }
  deleteEncounter(id: string): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
}

export default EncountersService;
