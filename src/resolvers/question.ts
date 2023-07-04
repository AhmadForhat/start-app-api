import { IQuestionSchema, Question } from "../models/question";

export const saveQuestions = async (questions: IQuestionSchema[]) => {
  await Question.insertMany(questions)
}

interface IGetQuestions {
  categoryId: string,
  levelId: string
  quantity: number
}

export const getQuestions = async ({
  quantity,
  categoryId,
  levelId
}: IGetQuestions) => {
  return await Question.find({
    categoryId,
    levelId,
  }).limit(quantity)
}

export const getQuestionById = async ( questionId: string) => {
  return await Question.findById(questionId)
}
