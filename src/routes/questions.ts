import { saveQuestions } from "../resolvers/question"

const express = require('express')
const questionsRoutes = express.Router()

questionsRoutes.get('/', (req, res) => {
  res.send('One test')
})

questionsRoutes.post('/save', async (req, res) => {
  const { body } = req
  console.log(body)
  await saveQuestions(body)
  res.json('two rest')
})

export { questionsRoutes }
