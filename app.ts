import './src/config'
import express from 'express';
import cors from 'cors'
import { connectMongo } from './src/db';
import { questionsRoutes, categoriesRoutes, levelsRoutes, subjectsRoutes } from './src/routes';
import bodyParser from 'body-parser';

const app = express();

connectMongo()

app.use(cors())
app.use(bodyParser.json());

app.use('/questions', questionsRoutes);
app.use('/categories', categoriesRoutes);
app.use('/subjects', subjectsRoutes)
app.use('/levels', levelsRoutes);

app.listen(process.env.PORT, () => {
  return console.log(`Express is listening at http://localhost:${process.env.PORT}`);
});
