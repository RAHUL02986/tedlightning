import mongoose, { Document, Schema } from 'mongoose';

export interface IContact extends Document {
  name: string;
  email: string;
  phone?: string;
  country: string;
  businessType: string;
  application: string;
  quantity?: string;
  message?: string;
  createdAt: Date;
  updatedAt: Date;
}

const ContactSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  phone: {
    type: String,
    trim: true
  },
  country: {
    type: String,
    required: true,
    trim: true
  },
  businessType: {
    type: String,
    required: true,
    trim: true
  },
  application: {
    type: String,
    required: true,
    trim: true
  },
  quantity: {
    type: String,
    trim: true
  },
  message: {
    type: String,
    trim: true
  }
}, {
  timestamps: true
});

export default mongoose.models.Contact || mongoose.model<IContact>('Contact', ContactSchema);
