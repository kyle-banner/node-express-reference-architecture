import { body, param } from 'express-validator';
import express from 'express';
import Controller from '../../controller';
import { TYPES } from '../../types';
import requestValidationFailures from '../../util/validateEndpoint';
import { inject, injectable } from 'inversify';
import IMeetingsService from './meetings.interface';
import responseMessages from '../../util/responseMessages';

@injectable()
class MeetingsController extends Controller {
  public basePath: string = '/meetings';
  private meetingsService: IMeetingsService;

  constructor(@inject(TYPES.MeetingsService) meetingsService: IMeetingsService) {
    super();
    this.meetingsService = meetingsService;
    this.initializeRoutes();
  }

  public async initializeRoutes() {
    this.router.get('/', async (req: express.Request, res: express.Response) => {
      const meetings = await this.meetingsService.getMeetings();
      res.send(meetings);
    });

    this.router.get('/:id', [param('id').isUUID()], async (req: express.Request, res: express.Response) => {
      const errors = requestValidationFailures(req);
      if (errors.length) {
        return res.status(400).json({ errors });
      }

      const meeting = await this.meetingsService.getMeetingById(req.params.id);
      if (meeting) {
        return res.send(meeting);
      }
      return res.status(404).send(`${responseMessages.MEETING_ID_NOT_FOUND} ${req.params.id}`);
    });

    this.router.post(
      '/',
      [
        body('employeeIds').isArray(),
        body('scheduledTime').isISO8601(),
        body('address.line1').isString(),
        body('address.city').isString(),
        body('address.state').isString(),
        body('address.zipCode').isNumeric(),
      ],
      async (req: express.Request, res: express.Response) => {
        const errors = requestValidationFailures(req);
        if (errors.length) {
          return res.status(400).json({ errors });
        }

        const createdMeeting = await this.meetingsService.createMeeting({ id: '1234', ...req.body });
        res.status(201).send(`${this.basePath}/${createdMeeting.id}`);
      }
    );

    this.router.put(
      '/:id',
      [
        body('employeeIds').isArray(),
        body('scheduledTime').isISO8601(),
        body('address.line1').isString(),
        body('address.city').isString(),
        body('address.state').isString(),
        body('address.zipCode').isNumeric(),
      ], async (req: express.Request, res: express.Response) => {
        const errors = requestValidationFailures(req);
        if (errors.length) {
          return res.status(400).json({ errors });
        }

        const meeting = { ...req.body, id: req.params.id };
        const createdMeeting = await this.meetingsService.updateMeeting(meeting);
        if(createdMeeting.id !== meeting.id) {
          return res.status(201).send(`${this.basePath}/${createdMeeting.id}`); // id was not found and new resource created
        }
        return res.status(200).send(`${this.basePath}/${createdMeeting.id}`); // updated resource
    });

    this.router.delete('/:id', [param('id').not().isEmpty()], async (req: express.Request, res: express.Response) => {
      const errors = requestValidationFailures(req);
      if (errors.length) {
        return res.status(400).json({ errors });
      }

      const deleteResult = await this.meetingsService.deleteMeeting(req.params.id);
      if (deleteResult) {
        return res.status(204).send();
      }
      return res.status(404).send(`${responseMessages.MEETING_ID_NOT_FOUND} ${req.params.id}`);
    });
  }
}

export default MeetingsController;
