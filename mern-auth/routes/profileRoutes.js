// routes/userRoutes.js
const express = require('express');
const Profilemodel = require('../models/Profilemodel');

const router = express.Router();

// Register
router.post('/bhanu', async (req, res) => {
  const { Name, Age,Gender,height,weight,Mail_id,Phone_number,Adress } = req.body;

  try {
    const profilemodel = new Profilemodel({ Name, Age,Gender,height,weight,Mail_id,Phone_number,Adress });
    await profilemodel.save();
    res.status(201).json({ message: 'User profile created successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Login

module.exports = router;
