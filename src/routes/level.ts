import { getLevelsBySubjectId, saveLevels } from "../resolvers/level"

const express = require('express')
const levelsRoutes = express.Router()

levelsRoutes.post('/save', async (req, res) => {
  const { body } = req
  await saveLevels(body)
  res.json(body)
})

levelsRoutes.get('/subjects/:subjectId', async (req, res) => {
  try {
    const { subjectId } = req.params;
    const result = await getLevelsBySubjectId(subjectId);

    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
})

export { levelsRoutes }
