import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
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
  },
  { timestamps: true },
);
export const Product = mongoose.model('product', productSchema);
// name - string, required
// price - number, required
// category - string, enum('books', 'electronics', 'clothing', 'other'), required, default 'other'
// description - string, optional
// createdAt - дата створення
// updatedAt - дата оновлення
