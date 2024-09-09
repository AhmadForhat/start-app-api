import { IQuestionSchema, Question } from "../models/question";

export const saveQuestions = async (questions: IQuestionSchema[]) => {
  await Question.insertMany(questions)
}

interface IGetQuestions {
  subjectId: string,
  levelId: string
  quantity?: number
}

export const getQuestions = async ({
  quantity=100,
  subjectId,
  levelId
}: IGetQuestions) => {
  return await Question.find({
    subjectId,
    levelId,
  }).limit(quantity)
}

export const getQuestionById = async ( questionId: string) => {
  return await Question.findById(questionId)
}
