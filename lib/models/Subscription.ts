import mongoose, { Schema, Document } from "mongoose";

export interface ISubscription extends Document {
  name: string;
  email: string;
  createdAt: Date;
}

const SubscriptionSchema = new Schema<ISubscription>(
  {
    name: {
      type: String,
      required: true,
      maxlength: 100,   
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Subscription ||
  mongoose.model<ISubscription>("Subscription", SubscriptionSchema);
