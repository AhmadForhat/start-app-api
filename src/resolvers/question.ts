import { IQuestionSchema, Question } from "../models/question";

export const saveQuestions = async (questions: IQuestionSchema[]) => {
  await Question.insertMany(questions)
}
