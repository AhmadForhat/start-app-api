import { ISubjectSchema, Subject } from "../models/subject";

export const saveSubjects = async (categories: ISubjectSchema[]) => {
  await Subject.insertMany(categories)
}

export const getSubjectsByCategoryId = async (categoryId: string): Promise<ISubjectSchema[]> => {
  try {
    const subjects = await Subject.find({ categoryId }).exec();
    return subjects;
  } catch (error) {
    throw new Error('Error fetching subjects by categoryId');
  }
};
