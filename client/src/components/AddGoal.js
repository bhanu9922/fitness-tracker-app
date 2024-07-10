import React, { useState } from 'react';
import axios from 'axios';

const AddGoal = ({ goal }) => {
  const [aim, setAim] = useState('');
  const [targetWeight, setTargetWeight] = useState('');
  const [targetDate, setTargetDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newGoal = { goal, aim, targetWeight, targetDate };

    axios.post('http://localhost:3000/api/goals/goal', newGoal)
      .then(response => {
        // Handle success
        console.log(response.data);
        setAim('');
        setTargetWeight('');
        setTargetDate('');
      })
      .catch(error => console.error(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 class="head">Add New Goal</h2>
      <div>
        <label className="name1"><b class="break">Aim</b></label>
        <select value={aim} onChange={(e) => setAim(e.target.value)} required class="optn inpt">
          <option value="" className="inpt">Select Aim</option>
          <option value="Weight Loss" className="inpt">Weight Loss</option>
          <option value="Flexibility" className="inpt">Flexibility</option>
          <option value="Flat Belly" className="inpt">Flat Belly</option>
          <option value="Muscle Gain" className="inpt">Muscle Gain</option>
        </select>
      </div>
      <div>
        <label className="name1"><b class="break">Target Weight (kg)</b></label>
        <input
          type="number"
          value={targetWeight}
          onChange={(e) => setTargetWeight(e.target.value)}
          required
          className="inpt"
        />
      </div>
      <div>
        <label className="name1"><b class="break">Target Date</b></label>
        <input
        class="optn"
          type="date"
          value={targetDate}
          onChange={(e) => setTargetDate(e.target.value)}
          required
          className="inpt"
        />
      </div>
      <button type="submit" className="btn btn-primary btnn">Add Goal</button>
    
    </form>
  );
};

export default AddGoal;
