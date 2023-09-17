import { getCategories, saveCategories } from "../resolvers/category"

const express = require('express')
const categoriesRoutes = express.Router()

categoriesRoutes.get('/', async (req, res) => {
  const result = await getCategories()

  res.json(result)
})

categoriesRoutes.post('/save', async (req, res) => {
  const { body } = req
  await saveCategories(body)
  res.json(body)
})

export { categoriesRoutes }
