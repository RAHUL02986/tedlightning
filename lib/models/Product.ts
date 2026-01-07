import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    subcategory: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    badge: {
      type: String,
      default: null,
    },
    specs: {
      power: String,
      lumens: String,
      autonomy: String,
      warranty: String,
    },
    description: {
      type: String,
      required: true,
    },
    features: [String],
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Product || mongoose.model('Product', ProductSchema);
