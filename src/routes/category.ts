import { saveCategories } from "../resolvers/category"

const express = require('express')
const categoriesRoutes = express.Router()

categoriesRoutes.post('/save', async (req, res) => {
  const { body } = req
  console.log(body)
  await saveCategories(body)
  res.json('two rest')
})

export { categoriesRoutes }
