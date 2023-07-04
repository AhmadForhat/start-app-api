import { getQuestionById, getQuestions, saveQuestions } from "../resolvers/question"

const express = require('express')
const questionsRoutes = express.Router()

questionsRoutes.post('/save', async (req, res) => {
  const { body } = req
  await saveQuestions(body)
  res.status(200).json('Saved')
})

questionsRoutes.get('/', async (req, res) => {
  const { query: {quantity, levelId, categoryId} } = req
  if(quantity && levelId && categoryId) {
    const questions = await getQuestions({quantity, levelId, categoryId})
    const formattedQuestions = questions.map(question => (
      {
        id: question._id,
        title: question.title,
        options: question.options
      }
    ))
    res.status(200).json(formattedQuestions)
  } else {
    res.status(500).json({
      error: 'Need to receive all the queries params'
    })
  }
})

questionsRoutes.post('/:questionId/correct', async (req, res) => {
  const {params: { questionId }, body: { selectedOptionId }} = req

  const question = await getQuestionById(questionId)

  if(question.correctAnswer.toString() === selectedOptionId){
    res.status(200).json({
      correct: true,
      question
    })
  } else {
    res.status(200).json({
      correct: false,
      question
    })
  }

  res.json(question)
})

export { questionsRoutes }
