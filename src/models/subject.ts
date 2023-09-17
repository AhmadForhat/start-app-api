import { Schema, Document, model } from 'mongoose';

// Categoty Interface
export interface ISubjectSchema extends Document {
  content: string;
  categoryId: string;
}

// Categoty Schema
const SubjectSchema: Schema<ISubjectSchema> = new Schema<ISubjectSchema>({
  content: { type: String, required: true },
  categoryId: { type: String, required: true }
});

// Define the models
const Subject = model<ISubjectSchema>('subject', SubjectSchema);

export { Subject };
