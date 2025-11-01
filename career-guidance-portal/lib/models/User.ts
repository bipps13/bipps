import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  role: 'user' | 'admin';
  profile?: {
    bio?: string;
    skills?: string[];
    interests?: string[];
    education?: string;
    experience?: string;
  };
  savedJobs: mongoose.Types.ObjectId[];
  assessmentResults?: {
    testId: string;
    score: number;
    suggestedCareers: string[];
    completedAt: Date;
  }[];
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide a name'],
    },
    email: {
      type: String,
      required: [true, 'Please provide an email'],
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, 'Please provide a password'],
      minlength: 6,
      select: false,
    },
    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user',
    },
    profile: {
      bio: String,
      skills: [String],
      interests: [String],
      education: String,
      experience: String,
    },
    savedJobs: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Job',
      },
    ],
    assessmentResults: [
      {
        testId: String,
        score: Number,
        suggestedCareers: [String],
        completedAt: Date,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const User: Model<IUser> = mongoose.models.User || mongoose.model<IUser>('User', UserSchema);

export default User;
