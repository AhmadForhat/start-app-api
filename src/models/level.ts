import { Schema, Document, Types, model } from 'mongoose';

// Level Interface
export interface ILevelSchema extends Document {
  content: string;
}

// Level Schema
const LevelSchema: Schema<ILevelSchema> = new Schema<ILevelSchema>({
  content: { type: String, required: true }
});

// Define the models
const Level = model<ILevelSchema>('levels', LevelSchema);

export { Level };
