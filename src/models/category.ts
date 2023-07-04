import { Schema, Document, model } from 'mongoose';

// Categoty Interface
export interface ICategorySchema extends Document {
  content: string;
}

// Categoty Schema
const CategotySchema: Schema<ICategorySchema> = new Schema<ICategorySchema>({
  content: { type: String, required: true }
});

// Define the models
const Category = model<ICategorySchema>('categories', CategotySchema);

export { Category };
