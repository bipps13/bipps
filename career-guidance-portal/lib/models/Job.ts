import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IJob extends Document {
  title: string;
  company: string;
  description: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Internship' | 'Contract' | 'Remote';
  salary?: {
    min: number;
    max: number;
    currency: string;
  };
  requirements: string[];
  responsibilities: string[];
  benefits?: string[];
  applicationLink: string;
  deadline?: Date;
  isActive: boolean;
  postedBy?: mongoose.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const JobSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ['Full-time', 'Part-time', 'Internship', 'Contract', 'Remote'],
      required: true,
    },
    salary: {
      min: Number,
      max: Number,
      currency: { type: String, default: 'USD' },
    },
    requirements: [String],
    responsibilities: [String],
    benefits: [String],
    applicationLink: {
      type: String,
      required: true,
    },
    deadline: Date,
    isActive: {
      type: Boolean,
      default: true,
    },
    postedBy: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
);

const Job: Model<IJob> = mongoose.models.Job || mongoose.model<IJob>('Job', JobSchema);

export default Job;
