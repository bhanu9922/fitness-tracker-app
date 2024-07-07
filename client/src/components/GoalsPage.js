import React, { useState } from 'react';
//import GoalsList from './GoalsList';
//import AddGoal from './AddGoal';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
//import UpdateGoal from './UpdateGoal';
//import EditGoalForm from './EditGoalForm';
import AddGoal from './AddGoal';

const GoalsPage = ( {goal} ) => {
  const [selectedGoal, setSelectedGoal] = useState(null);

  
    //const handleSelectGoal = (goal) => {
      //setSelectedGoal(goal);
    //};
  
    const handleUpdateGoal = (updatedGoal) => {
      // Update the goal in your state or refetch the goals
      console.log('Goal updated:', updatedGoal);
      setSelectedGoal(null);
    };

  return (
    <div class="box">
      <div className="col-12">
        <nav className="navbar navbar-expand-lg navbar-light bg-black navb">
          <a className="navbar-brand" href="#">
            <img src="https://res.cloudinary.com/dfu4raix4/image/upload/v1718950120/atklqo31snvpy22d82t9.png" className="img" />
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ml-auto">
              <nav>
                <Link to="/home" className="custom-link sechead" state={{ message: 'Please log in with your username and password.' }}>Home</Link>
                <Link to="/profile" className="custom-link sechead" state={{ message: 'Please log in with your username and password.' }}>Profile</Link>
                <Link to="/goals" className="custom-link sechead" state={{ message: 'Please log in with your username and password.' }}>Goals</Link>
                <Link to="/udhi" className="custom-link sechead" state={{ message: 'Please log in with your username and password.' }}>Workout Plans</Link>
                <Link to="/kallu" className="custom-link sechead" state={{ message: 'Please log in with your username and password.' }}>Workout Types</Link>
                <Link to="/diet" className="custom-link sechead" state={{ message: 'Please log in with your username and password.' }}>Diet</Link>
                <Link to="/track" className="custom-link sechead" state={{ message: 'Please log in with your username and password.' }}>Track</Link>
              </nav>
            </div>
          </div>
        </nav>
      </div>
      <div className="col-12 col-md-12 bootpro">
        <div className="authspro">
      <AddGoal goal={goal} />
      
     
    </div>
    </div>
    </div>
  );
};

export default GoalsPage;
