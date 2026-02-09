import {Schema, model} from 'mongoose';

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      enum: ['books', 'electronics', 'clothing', 'other'],
      required: true,
      default: 'other',
    },
    description: {
      type: String,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  { timestamps: true },
);
export const Product = model('product', productSchema);
// name - string, required
// price - number, required
// category - string, enum('books', 'electronics', 'clothing', 'other'), required, default 'other'
// description - string, optional
// createdAt - дата створення
// updatedAt - дата оновлення
