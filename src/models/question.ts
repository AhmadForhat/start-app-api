import { Schema, Document, Types, model } from 'mongoose';

// Option Interface
export interface IOptionSchema extends Document {
  optionId: string;
  content: string;
}

// Question Interface
export interface IQuestionSchema extends Document {
  categoryId: string;
  levelId: string;
  title: string;
  code: string;
  options: IOptionSchema[];
  correctAnswer: string;
}

// Option Schema
const OptionSchema: Schema<IOptionSchema> = new Schema<IOptionSchema>({
  optionId: { type: String },
  content: { type: String, required: true },
}, {_id: false});

// Question Schema
const QuestionSchema: Schema<IQuestionSchema> = new Schema<IQuestionSchema>({
  categoryId: {
    type: String,
    required: true
  },
  levelId: {
    type: String,
    required: true
  },
  title: { type: String, required: true },
  code: { type: String, required: false },
  options: [OptionSchema],
  correctAnswer: { type: String, required: true },
});

// Define the models
const Question = model<IQuestionSchema>('questions', QuestionSchema);

export { Question };
