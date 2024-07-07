const express = require('express');
const router = express.Router();
const goalController = require('../controllers/goalController');

router.post('/goal', goalController.addGoal);
router.get('/:userId', goalController.getGoals);
router.put('/:id', goalController.updateGoal);
router.delete('/:id', goalController.deleteGoal);

module.exports = router;
