import { body, param } from 'express-validator';
import express from 'express';
import Controller from '../../controller';
import { TYPES } from '../../types';
import requestValidationFailures from '../../util/validateEndpoint';
import { inject, injectable } from 'inversify';
import IMeetingsService from './meetings.interface';

@injectable()
class MeetingsController extends Controller {
  public basePath: string = '/meetings';
  private meetingsService: IMeetingsService;

  constructor(@inject(TYPES.MeetingsService) meetingsService: IMeetingsService) {
    super();
    this.meetingsService = meetingsService;
    this.initializeRoutes();
  }

  public initializeRoutes() {
    this.router.get('/', async (req: express.Request, res: express.Response) => {
      const meetings = await this.meetingsService.getMeetings();
      res.send(meetings);
    });

    this.router.get('/:id', [param('id').not().isEmpty()], async (req: express.Request, res: express.Response) => {
      const errors = requestValidationFailures(req);
      if (errors.length) {
        return res.status(400).json({ errors });
      }

      const meeting = await this.meetingsService.getMeetingById(req.params.id);
      res.send(meeting);
    });

    this.router.post('/', async (req: express.Request, res: express.Response) => {
      const createdMeeting = await this.meetingsService.createMeeting(req.body);
      res.status(201).send(`http://localhost:8080/employees/${createdMeeting.id}`);
    });

    this.router.put('/:id', async (req: express.Request, res: express.Response) => {
      const createdMeeting = await this.meetingsService.updateMeeting(req.body);
      if (createdMeeting.previouslyExisted) {
        res.status(200).send(`http://localhost:8080/employees/${createdMeeting.id}`);
      }
      res.status(201).send(`http://localhost:8080/employees/${createdMeeting.id}`);
    });

    this.router.delete('/:id', [param('id').not().isEmpty()], async (req: express.Request, res: express.Response) => {
      const errors = requestValidationFailures(req);
      if (errors.length) {
        return res.status(400).json({ errors });
      }

      const deleteResult = await this.meetingsService.deleteMeeting(req.params.id);
      if (deleteResult) {
        res.status(200).send();
      }
      res.status(404).send(`Could not find meeting with id ${req.params.id}`);
    });
  }
}

export default MeetingsController;
