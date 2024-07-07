const mongoose = require('mongoose');

const GoalSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    aim: { type: String, enum: ['Weight Loss', 'Flexibility', 'Flat Belly', 'Muscle Gain'], required: true },
    targetWeight: { type: Number }, // Target weight in kg, optional
    targetDate: { type: Date }, // Optional target date for achieving the goal
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  });
  
  module.exports = mongoose.model('Goal', GoalSchema);
  