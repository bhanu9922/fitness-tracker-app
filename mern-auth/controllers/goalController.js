const Goal = require('../models/Goal');

exports.addGoal = async (req, res) => {
  try {
    const goal = new Goal(req.body);
    await goal.save();
    res.status(201).json(goal);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getGoals = async (req, res) => {
  try {
    const goals = await Goal.find({ userId: req.params.userId });
    res.status(200).json(goals);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.updateGoal = async (req, res) => {
  try {
    const goal = await Goal.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(goal);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteGoal = async (req, res) => {
  try {
    await Goal.findByIdAndDelete(req.params.id);
    res.status(204).json({ message: 'Goal deleted successfully' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
