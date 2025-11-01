import mongoose, { Schema, Document, Model } from 'mongoose';

export interface ICareer extends Document {
  title: string;
  description: string;
  category: string;
  salaryRange: {
    min: number;
    max: number;
    currency: string;
  };
  requiredSkills: string[];
  roadmap: {
    phase: string;
    title: string;
    description: string;
    duration: string;
  }[];
  demandLevel: 'Low' | 'Medium' | 'High' | 'Very High';
  growthRate: string;
  education: string[];
  workEnvironment: string;
  relatedCareers: string[];
  createdAt: Date;
  updatedAt: Date;
}

const CareerSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    salaryRange: {
      min: { type: Number, required: true },
      max: { type: Number, required: true },
      currency: { type: String, default: 'USD' },
    },
    requiredSkills: [String],
    roadmap: [
      {
        phase: String,
        title: String,
        description: String,
        duration: String,
      },
    ],
    demandLevel: {
      type: String,
      enum: ['Low', 'Medium', 'High', 'Very High'],
      default: 'Medium',
    },
    growthRate: String,
    education: [String],
    workEnvironment: String,
    relatedCareers: [String],
  },
  {
    timestamps: true,
  }
);

const Career: Model<ICareer> = mongoose.models.Career || mongoose.model<ICareer>('Career', CareerSchema);

export default Career;
