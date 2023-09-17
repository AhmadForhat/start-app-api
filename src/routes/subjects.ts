import { getSubjectsByCategoryId, saveSubjects } from "../resolvers/subject"

const express = require('express')
const subjectsRoutes = express.Router()

subjectsRoutes.post('/save', async (req, res) => {
  const { body } = req
  await saveSubjects(body)
  res.json(body)
})

subjectsRoutes.get('/categories/:categoryId', async (req, res) => {
  try {
    const { categoryId } = req.params;
    const result = await getSubjectsByCategoryId(categoryId);

    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export { subjectsRoutes }
