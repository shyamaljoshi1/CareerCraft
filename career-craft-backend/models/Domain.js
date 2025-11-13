const mongoose = require('mongoose');

/**
 * Resource Schema - Used for freeResources and paidResources
 * Matches the structure in domain files
 */
const resourceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: ['text', 'video', 'course', 'tool', 'book'],
    default: 'text'
  },
  link: {
    type: String,
    required: true
  }
}, { _id: false });

const paidResourceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  }
}, { _id: false });

/**
 * Project Schema - Used for projects in topics
 */
const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: true
  }
}, { _id: false });

/**
 * Organization Schema - Used for organizations in topics
 */
const organizationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: true
  }
}, { _id: false });

/**
 * Topic Schema - Represents a topic within a domain
 * Structure matches domain files topics
 */
const topicSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  route: {
    type: String,
    required: true
  },
  summary: {
    type: String,
    required: true
  },
  freeResources: [resourceSchema],
  paidResources: [paidResourceSchema],
  projects: [projectSchema],
  organizations: [organizationSchema]
}, { _id: true });

/**
 * Domain Schema - Main domain document
 * Structure exactly matches domain files structure
 */
const domainSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  title: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    required: true
  },
  quizRoute: {
    type: String,
    default: ''
  },
  topics: [topicSchema],
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Update the updatedAt timestamp before saving
domainSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('Domain', domainSchema);
