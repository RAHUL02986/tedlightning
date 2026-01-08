import mongoose from 'mongoose';

interface ICartItem {
  productId: string;
  quantity: number;
  price: number;
  name?: string;
  image?: string;
}

interface ICart {
  sessionId: string;
  items: ICartItem[];
  total: number;
  createdAt?: Date;
  updatedAt?: Date;
}

const CartItemSchema = new mongoose.Schema({
  productId: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    min: 1,
  },
  price: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
  },
  image: {
    type: String,
  },
});

const CartSchema = new mongoose.Schema<ICart>(
  {
    sessionId: {
      type: String,
      required: true,
      unique: true,
    },
    items: [CartItemSchema],
    total: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);



export default mongoose.models.Cart || mongoose.model<ICart>('Cart', CartSchema);
