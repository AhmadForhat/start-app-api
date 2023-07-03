import { saveQuestions } from "../resolvers/question"

const express = require('express')
const questionsRoutes = express.Router()

questionsRoutes.post('/save', async (req, res) => {
  const { body } = req
  // console.log(body)
  console.log('response: ', res)
  await saveQuestions(body)
  res.json('two rest')
})

export { questionsRoutes }