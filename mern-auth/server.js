// server.js
const mongoose = require('mongoose');
const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const profileRoutes=require('./routes/profileRoutes')
const goalRoutes = require('./routes/goalRoutes');
const bodyParser = require('body-parser');





const app = express();
const PORT = process.env.PORT || 3000;

//connectDB

connectDB();

// Middleware
app.use(cors(

));
app.use(express.json());
app.use(bodyParser.json());



// Routes
app.use('/api/users', userRoutes);
app.use('/api/profile',profileRoutes);
app.use('/api/goals', goalRoutes);

//crudschema

   // Task Schema
   const taskSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean,
  });

  const Task = mongoose.model('Task', taskSchema);

  // CRUD Routes

  // Create Task
  app.post('/tasks', async (req, res) => {
    const task = new Task(req.body);
    try {
      await task.save();
      res.status(201).send(task);
    } catch (err) {
      res.status(400).send(err);
    }
  });

  // Read All Tasks
  app.get('/tasks', async (req, res) => {
    try {
      const tasks = await Task.find();
      res.send(tasks);
    } catch (err) {
      res.status(500).send(err);
    }
  });

  // Read Single Task
  app.get('/tasks/:id', async (req, res) => {
    try {
      const task = await Task.findById(req.params.id);
      if (!task) {
        res.status(404).send('Task not found');
      } else {
        res.send(task);
      }
    } catch (err) {
      res.status(500).send(err);
    }
  });

  // Update Task
  app.patch('/tasks/:id', async (req, res) => {
    try {
      const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!task) {
        res.status(404).send('Task not found');
      } else {
        res.send(task);
      }
    } catch (err) {
      res.status(500).send(err);
    }
  });

  // Delete Task
  app.delete('/tasks/:id', async (req, res) => {
    try {
      const task = await Task.findByIdAndDelete(req.params.id);
      if (!task) {
        res.status(404).send('Task not found');
      } else {
        res.send('Task deleted');
      }
    } catch (err) {
      res.status(500).send(err);
    }
  });


//workouttypes schema

const workoutTypeSchema = new mongoose.Schema({
    type: { 
        type: String, 
        required: true, 
        unique: true, 
        enum: ['workout', 'yoga', 'running', 'zumba', 'dance']
    },
    description: { type: String, required: true }
});

const WorkoutType = mongoose.model('WorkoutType', workoutTypeSchema);

//crud operations of workouttypes

app.post('/workout-types', async (req, res) => {
  try {
      const workoutType = new WorkoutType(req.body);
      await workoutType.save();
      res.status(201).send(workoutType);
  } catch (error) {
      res.status(400).send(error);
  }
});


app.get('/workout-types', async (req, res) => {
  try {
      const workoutTypes = await WorkoutType.find();
      res.status(200).send(workoutTypes);
  } catch (error) {
      res.status(500).send(error);
  }
});


app.patch('/workout-types/:id', async (req, res) => {
  try {
      const workoutType = await WorkoutType.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
      if (!workoutType) {
          return res.status(404).send();
      }
      res.status(200).send(workoutType);
  } catch (error) {
      res.status(400).send(error);
  }
});


app.delete('/workout-types/:id', async (req, res) => {
  try {
      const workoutType = await WorkoutType.findByIdAndDelete(req.params.id);
      if (!workoutType) {
          return res.status(404).send();
      }
      res.status(200).send(workoutType);
  } catch (error) {
      res.status(500).send(error);
  }
});


//schema for workout plans





const workoutPlanSchema = new mongoose.Schema({
  planName: { type: String, required: true, unique: true },
  level: { type: String, required: true },
  types: { type: String, required: true },
  day: { type: String, required: true },
  warmup: { type: String, required: true },
  exercises: { type: String, required: true },
  cooldown: { type: String, required: true },
  name: { type: String, required: true },
  duration: { type: String, required: true },
  frequency: { type: String, required: true },
  intensity: { type: String, required: true },
  description: { type: String }
});

const WorkoutPlan = mongoose.model('WorkoutPlan', workoutPlanSchema);

// CRUD routes

// Get all workout plans
app.get('/workout-plans', async (req, res) => {
  try {
      const workoutPlans = await WorkoutPlan.find();
      res.json(workoutPlans);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
});

// Add a new workout plan
app.post('/workout-plans', async (req, res) => {
  const workoutPlan = new WorkoutPlan(req.body);
  try {
      const newWorkoutPlan = await workoutPlan.save();
      res.status(201).json(newWorkoutPlan);
  } catch (error) {
      res.status(400).json({ message: error.message });
  }
});

// Update a workout plan
app.patch('/workout-plans/:id', async (req, res) => {
  try {
      const updatedWorkoutPlan = await WorkoutPlan.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json(updatedWorkoutPlan);
  } catch (error) {
      res.status(400).json({ message: error.message });
  }
});

// Delete a workout plan
app.delete('/workout-plans/:id', async (req, res) => {
  try {
      await WorkoutPlan.findByIdAndDelete(req.params.id);
      res.json({ message: 'Workout plan deleted' });
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
});


//diet schema



const dietSchema = new mongoose.Schema({
    mealType: { 
        type: String, 
        required: true, 
        enum: ['breakfast', 'lunch', 'dinner', 'snack'] // Include different meal types here
    },
    items: [{ 
        name: { type: String, required: true },
        macros: {
            protein: { type: Number, required: true },
            carbs: { type: Number, required: true },
            fat: { type: Number, required: true }
        },
        calories: { type: Number, required: true }
    }]
});

const Diet = mongoose.model('Diet', dietSchema);


// CRUD routes for Diet

// Get all diet plans
app.get('/diets', async (req, res) => {
  try {
      const diets = await Diet.find();
      res.json(diets);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
});

// Add a new diet plan
app.post('/diets', async (req, res) => {
  const diet = new Diet(req.body);
  try {
      const newDiet = await diet.save();
      res.status(201).json(newDiet);
  } catch (error) {
      res.status(400).json({ message: error.message });
  }
});

// Update a diet plan
app.patch('/diets/:id', async (req, res) => {
  try {
      const updatedDiet = await Diet.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json(updatedDiet);
  } catch (error) {
      res.status(400).json({ message: error.message });
  }
});

// Delete a diet plan
app.delete('/diets/:id', async (req, res) => {
  try {
      await Diet.findByIdAndDelete(req.params.id);
      res.json({ message: 'Diet plan deleted' });
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
});


//track schema

const trackSchema = new mongoose.Schema({
    username: { type: String, required: true },
    workoutsDone: { type: String, required: true },
    sleep: { type: Number, required: true },
    steps: { type: Number, required: true },
    reminders: [{ type: String }]
});

const Track = mongoose.model('Track', trackSchema);

module.exports = Track;

app.post('/tracks', async (req, res) => {
  try {
      const track = new Track(req.body);
      await track.save();
      res.status(201).send(track);
  } catch (error) {
      res.status(400).send(error);
  }
});

app.get('/tracks', async (req, res) => {
  try {
      const tracks = await Track.find();
      res.status(200).send(tracks);
  } catch (error) {
      res.status(500).send(error);
  }
});

app.patch('/tracks/:id', async (req, res) => {
  try {
      const track = await Track.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
      if (!track) {
          return res.status(404).send();
      }
      res.status(200).send(track);
  } catch (error) {
      res.status(400).send(error);
  }
});

app.delete('/tracks/:id', async (req, res) => {
  try {
      const track = await Track.findByIdAndDelete(req.params.id);
      if (!track) {
          return res.status(404).send();
      }
      res.status(200).send(track);
  } catch (error) {
      res.status(500).send(error);
  }
});




app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
