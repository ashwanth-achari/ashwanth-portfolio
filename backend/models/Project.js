const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please add a title'],
      trim: true,
    },
    slug: {
      type: String,
      required: [true, 'Please add a slug'],
      unique: true,
      trim: true,
      lowercase: true,
    },
    thumbnailUrl: {
      type: String,
      required: [true, 'Please add a thumbnail URL'],
    },
    description: {
      type: String,
      required: [true, 'Please add a description'],
    },
    techStack: {
      type: [String],
      required: [true, 'Please add tech stack'],
    },
    githubUrl: {
      type: String,
      required: [true, 'Please add a GitHub URL'],
    },
    liveUrl: {
      type: String,
      required: [true, 'Please add a live URL'],
    },
    category: {
      type: String,
      required: [true, 'Please add a category'],
      enum: ['Full Stack', 'Frontend', 'Backend', 'Practice Project'],
    },
    role: {
      type: String,
      required: [true, 'Please add a role'],
      default: 'Solo Developer',
    },
    duration: {
      type: String,
      required: [true, 'Please add a duration'],
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Project', projectSchema);