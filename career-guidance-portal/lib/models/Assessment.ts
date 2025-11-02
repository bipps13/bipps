import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IAssessment extends Document {
  title: string;
  description: string;
  type: 'aptitude' | 'interest' | 'personality' | 'skill';
  questions: {
    id: string;
    question: string;
    options: {
      text: string;
      value: number;
      category?: string;
    }[];
  }[];
  scoring: {
    category: string;
    minScore: number;
    maxScore: number;
    suggestedCareers: string[];
    description: string;
  }[];
  duration: number;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const AssessmentSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ['aptitude', 'interest', 'personality', 'skill'],
      required: true,
    },
    questions: [
      {
        id: String,
        question: String,
        options: [
          {
            text: String,
            value: Number,
            category: String,
          },
        ],
      },
    ],
    scoring: [
      {
        category: String,
        minScore: Number,
        maxScore: Number,
        suggestedCareers: [String],
        description: String,
      },
    ],
    duration: {
      type: Number,
      default: 30,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const Assessment: Model<IAssessment> = mongoose.models.Assessment || mongoose.model<IAssessment>('Assessment', AssessmentSchema);

export default Assessment;
