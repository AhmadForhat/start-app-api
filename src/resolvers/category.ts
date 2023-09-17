import { ICategorySchema, Category } from "../models/category";

export const saveCategories = async (categories: ICategorySchema[]) => {
  await Category.insertMany(categories)
}

export const getCategories = async () => {
  try {
    const categories = await Category.find({});
    return categories;
  } catch (error) {
    throw error;
  }
};
