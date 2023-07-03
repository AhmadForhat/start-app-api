import { ICategorySchema, Category } from "../models/category";

export const saveCategories = async (categories: ICategorySchema[]) => {
  await Category.insertMany(categories)
}
