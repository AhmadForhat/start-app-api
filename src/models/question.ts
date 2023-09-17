import { Schema, Document, model } from 'mongoose';

// Option Interface
export interface IOptionSchema extends Document {
  content: string;
}

// Question Interface
export interface IQuestionSchema extends Document {
  subjectId: string;
  levelId: string;
  title: string;
  options: IOptionSchema[];
  correctAnswer: string;
}

// Option Schema
const OptionSchema: Schema<IOptionSchema> = new Schema<IOptionSchema>({
  content: { type: String, required: true },
});

// Question Schema
const QuestionSchema: Schema<IQuestionSchema> = new Schema<IQuestionSchema>({
  subjectId: {
    type: String,
    required: true
  },
  levelId: {
    type: String,
    required: true
  },
  title: { type: String, required: true },
  options: [OptionSchema],
  correctAnswer: { type: String, required: true },
});

// Define the models
const Question = model<IQuestionSchema>('questions', QuestionSchema);

export { Question };
