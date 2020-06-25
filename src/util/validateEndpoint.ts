import { validationResult } from 'express-validator';
import express from 'express';

function requestValidationFailures(req: express.Request) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return errors.array();
  }
  return [];
}

export default requestValidationFailures;
