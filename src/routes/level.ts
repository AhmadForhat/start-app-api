import { saveLevels } from "../resolvers/level"

const express = require('express')
const levelsRoutes = express.Router()

levelsRoutes.post('/save', async (req, res) => {
  const { body } = req
  await saveLevels(body)
  res.json('two rest')
})

export { levelsRoutes }
