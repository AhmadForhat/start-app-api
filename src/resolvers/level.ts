import { ILevelSchema, Level } from "../models/level";

export const saveLevels = async (levels: ILevelSchema[]) => {
  await Level.insertMany(levels)
}
