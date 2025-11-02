import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IResource extends Document {
  title: string;
  description: string;
  type: 'course' | 'article' | 'template' | 'video' | 'guide';
  category: string;
  content?: string;
  link?: string;
  thumbnail?: string;
  author?: string;
  duration?: string;
  difficulty?: 'Beginner' | 'Intermediate' | 'Advanced';
  tags: string[];
  isPremium: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const ResourceSchema: Schema = new Schema(
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
      enum: ['course', 'article', 'template', 'video', 'guide'],
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    content: String,
    link: String,
    thumbnail: String,
    author: String,
    duration: String,
    difficulty: {
      type: String,
      enum: ['Beginner', 'Intermediate', 'Advanced'],
    },
    tags: [String],
    isPremium: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Resource: Model<IResource> = mongoose.models.Resource || mongoose.model<IResource>('Resource', ResourceSchema);

export default Resource;
