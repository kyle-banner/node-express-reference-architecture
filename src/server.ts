import express from 'express';
const app = express();

app.get('/', (req, res) => {
  res.send('Hello world!');
});

// start the Express server
app.listen(process.env.PORT, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${process.env.PORT}`);
});
