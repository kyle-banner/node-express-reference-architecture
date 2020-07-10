import { body, param } from 'express-validator';
import express from 'express';
import Controller from '../../controller';
import { TYPES } from '../../types';
import requestValidationFailures from '../../util/validateEndpoint';
import { inject, injectable } from 'inversify';
import IEncountersService from './encounters.interface';

@injectable()
class EncountersController extends Controller {
  public basePath: string = '/encounters';
  private encountersService: IEncountersService;

  constructor(@inject(TYPES.EncountersService) encountersService: IEncountersService) {
    super();
    this.encountersService = encountersService;
    this.initializeRoutes();
  }

  public initializeRoutes() {
    this.router.get('/', async (req: express.Request, res: express.Response) => {
      const encounters = await this.encountersService.getEncounters();
      res.send(encounters);
    });

    this.router.get('/:id', [param('id').not().isEmpty()], async (req: express.Request, res: express.Response) => {
      const errors = requestValidationFailures(req);
      if (errors.length) {
        return res.status(400).json({ errors });
      }

      const encounter = await this.encountersService.getEncounterById(req.params.id);
      res.send(encounter);
    });

    this.router.post('/', async (req: express.Request, res: express.Response) => {
      const createdEncounter = await this.encountersService.createEncounter(req.body);
      res.status(201).send(`http://localhost:8080/employees/${createdEncounter.id}`);
    });

    this.router.put('/:id', async (req: express.Request, res: express.Response) => {
      const createdEncounter = await this.encountersService.updateEncounter(req.body);
      if (createdEncounter.previouslyExisted) {
        res.status(200).send(`http://localhost:8080/employees/${createdEncounter.id}`);
      }
      res.status(201).send(`http://localhost:8080/employees/${createdEncounter.id}`);
    });

    this.router.delete('/:id', [param('id').not().isEmpty()], async (req: express.Request, res: express.Response) => {
      const errors = requestValidationFailures(req);
      if (errors.length) {
        return res.status(400).json({ errors });
      }

      const deleteResult = await this.encountersService.deleteEncounter(req.params.id);
      if (deleteResult) {
        res.status(200).send();
      }
      res.status(404).send(`Could not find encounter with id ${req.params.id}`);
    });
  }
}

export default EncountersController;
