import mongoose, { Document, Model } from 'mongoose';

export interface IContact extends Document {
  name: string;
  email: string;
  phone?: string;
  country: string;
  businessType: string;
  application: string;
  quantity?: string;
  message?: string;
}

const contactSchema = new mongoose.Schema<IContact>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
  country: { type: String, required: true },
  businessType: { type: String, required: true },
  application: { type: String, required: true },
  quantity: { type: String },
  message: { type: String },
}, { timestamps: true });

const Contact: Model<IContact> = mongoose.models.Contact || mongoose.model('Contact', contactSchema);

export default Contact;
