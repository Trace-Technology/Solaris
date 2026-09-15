import mongoose, { Schema, Document, Model } from "mongoose";

export type ConsultationStatus =
  | "new"
  | "contacted"
  | "scheduled"
  | "completed"
  | "cancelled";

export interface IConsultation extends Document {
  name: string;
  phone: string;
  email: string;
  address: string;
  propertyType: "residential" | "commercial" | "industrial";
  monthlyBill: string;
  message: string;
  status: ConsultationStatus;
  createdAt: Date;
  updatedAt: Date;
}

const ConsultationSchema = new Schema<IConsultation>(
  {
    name: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    address: { type: String, required: true, trim: true },
    propertyType: {
      type: String,
      enum: ["residential", "commercial", "industrial"],
      required: true,
    },
    monthlyBill: { type: String, required: true, trim: true },
    message: { type: String, default: "" },
    status: {
      type: String,
      enum: ["new", "contacted", "scheduled", "completed", "cancelled"],
      default: "new",
    },
  },
  { timestamps: true }
);

export const Consultation: Model<IConsultation> =
  mongoose.models.Consultation ||
  mongoose.model<IConsultation>("Consultation", ConsultationSchema);
