import { saveCategories } from "../resolvers/category"

const express = require('express')
const categoriesRoutes = express.Router()

categoriesRoutes.post('/save', async (req, res) => {
  const { body } = req
  await saveCategories(body)
  res.json('Category Saved')
})

export { categoriesRoutes }
