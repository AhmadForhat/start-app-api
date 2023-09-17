import { getQuestionById, getQuestions, saveQuestions } from "../resolvers/question"

const express = require('express')
const questionsRoutes = express.Router()

questionsRoutes.post('/save', async (req, res) => {
  const { body } = req
  await saveQuestions(body)
  res.status(200).json(body)
})

questionsRoutes.get('/subjects/:subjectId/levels/:levelId', async (req, res) => {
  const { query: { quantity }, params: { subjectId, levelId } } = req
  if(levelId && subjectId) {
    const questions = await getQuestions({ quantity, levelId, subjectId })
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

questionsRoutes.post('/:questionId/verify', async (req, res) => {
  const {params: { questionId }, body: { selectedOptionId }} = req

  const question = await getQuestionById(questionId)

  if(question.correctAnswer === selectedOptionId){
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
})

export { questionsRoutes }
