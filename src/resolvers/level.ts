import { ILevelSchema, Level } from "../models/level";

export const saveLevels = async (levels: ILevelSchema[]) => {
  await Level.insertMany(levels)
}

export const getLevelsBySubjectId = async (subjectId: string): Promise<ILevelSchema[]> => {
  try {
    const subjects = await Level.find({ subjectId }).exec();
    return subjects;
  } catch (error) {
    throw new Error('Error fetching level by subjectId');
  }
};
