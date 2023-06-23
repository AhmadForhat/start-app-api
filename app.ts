import './src/config'
import express from 'express';
import cors from 'cors'
import { connectMongo } from './src/db';
import { questionsRoutes } from './src/routes';
import bodyParser from 'body-parser';

const app = express();

connectMongo()

app.use(cors())
app.use(bodyParser.json());

app.use('/questions', questionsRoutes);

app.listen(process.env.PORT, () => {
  return console.log(`Express is listening at http://localhost:${process.env.PORT}`);
});
