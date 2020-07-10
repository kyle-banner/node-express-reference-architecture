import Encounter from '@models/Encounter';
import Employee from '@models/Employee';
import CreateEmployeeRequest from '@models/CreateEmployeeRequest';
import UpdateEmployeeResponse from '@models/UpdateEmployeeResponse';

interface IEncountersService {
  getEncounters(): Promise<Encounter[]>;
  getEncounterById(id: string): Promise<Encounter | undefined>;
  createEncounter(employees: Employee[]): Promise<Encounter>;
  updateEncounter(id: string): Promise<UpdateEmployeeResponse>;
  deleteEncounter(id: string): Promise<boolean>;
}

export default IEncountersService;
