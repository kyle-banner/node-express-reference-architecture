import 'reflect-metadata';
import express from 'express';
import routes from './routes';

const app = express();
app.use('/', routes);
app.listen(process.env.PORT, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${process.env.PORT}`);
});
