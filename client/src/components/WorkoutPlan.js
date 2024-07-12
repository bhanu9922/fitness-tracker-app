import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const WorkoutPlan = () => {
    const [workoutPlans, setWorkoutPlans] = useState([]);
    const [currentWorkoutPlan, setCurrentWorkoutPlan] = useState({
        planName: '',
        level: '',
        types: '',
        day: '',
        warmup: '',
        exercises: '',
        cooldown: '',
        name: '',
        duration: '',
        frequency: '',
        intensity: '',
        description: ''
    });
    const [editing, setEditing] = useState(false);

    useEffect(() => {
        fetchWorkoutPlans();
    }, []);

    const fetchWorkoutPlans = async () => {
        try {
            const response = await axios.get('https://fitness-tracker-app-1.onrender.com/workout-plans'); // Update this URL to your backend endpoint
            setWorkoutPlans(response.data);
        } catch (error) {
            console.error('Error fetching workout plans:', error);
        }
    };

    const addWorkoutPlan = async () => {
        try {
            const response = await axios.post('https://fitness-tracker-app-1.onrender.com/workout-plans', currentWorkoutPlan); // Update this URL to your backend endpoint
            setWorkoutPlans([...workoutPlans, response.data]);
            setCurrentWorkoutPlan({ planName: '', level: '', types: '', day: '', warmup: '', exercises: '', cooldown: '', name: '', duration: '', frequency: '', intensity: '', description: '' });
        } catch (error) {
            console.error('Error adding workout plan:', error);
        }
    };

    const updateWorkoutPlan = (plan) => {
        setCurrentWorkoutPlan(plan);
        setEditing(true);
    };

    const saveWorkoutPlan = async () => {
        try {
            const response = await axios.patch(`https://fitness-tracker-app-1.onrender.com/workout-plans/${currentWorkoutPlan._id}`, currentWorkoutPlan); // Update this URL to your backend endpoint
            const updatedPlans = workoutPlans.map(plan =>
                plan._id === currentWorkoutPlan._id ? response.data : plan
            );
            setWorkoutPlans(updatedPlans);
            setCurrentWorkoutPlan({ planName: '', level: '', types: '', day: '', warmup: '', exercises: '', cooldown: '', name: '', duration: '', frequency: '', intensity: '', description: '' });
            setEditing(false);
        } catch (error) {
            console.error('Error saving workout plan:', error);
        }
    };

    const deleteWorkoutPlan = async (id) => {
        try {
            await axios.delete(`https://fitness-tracker-app-1.onrender.com/workout-plans/${id}`); // Update this URL to your backend endpoint
            setWorkoutPlans(workoutPlans.filter(plan => plan._id !== id));
        } catch (error) {
            console.error('Error deleting workout plan:', error);
        }
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
                <Link to="diet" className="custom-link sechead" state={{ message: 'Please log in with your username and password.' }}>Diet</Link>
                <Link to="/track" className="custom-link sechead" state={{ message: 'Please log in with your username and password.' }}>Track</Link>
              </nav>
            </div>
          </div>
        </nav>
      </div>
      <div className="col-12 col-md-12 boot1">
      <div className="authspro">
        <div className="container mt-5">
            <h1 class="head">Workout Plans</h1>
            <div className="mb-3">
                <input
                    type="text"
                className="form-control inpt"
                    placeholder="Plan Name"
                    value={currentWorkoutPlan.planName}
                    onChange={(e) => setCurrentWorkoutPlan({ ...currentWorkoutPlan, planName: e.target.value })}
                />
                <input
                    type="text"
                    className="form-control inpt mt-2"
                    placeholder="Level"
                    value={currentWorkoutPlan.level}
                    onChange={(e) => setCurrentWorkoutPlan({ ...currentWorkoutPlan, level: e.target.value })}
                />
                <input
                    type="text"
                    className="form-control inpt mt-2"
                    placeholder="Types"
                    value={currentWorkoutPlan.types}
                    onChange={(e) => setCurrentWorkoutPlan({ ...currentWorkoutPlan, types: e.target.value })}
                />
                <input
                    type="text"
                    className="form-control inpt mt-2"
                    placeholder="Day"
                    value={currentWorkoutPlan.day}
                    onChange={(e) => setCurrentWorkoutPlan({ ...currentWorkoutPlan, day: e.target.value })}
                />
                <input
                    type="text"
                    className="form-control inpt mt-2"
                    placeholder="Warm-up"
                    value={currentWorkoutPlan.warmup}
                    onChange={(e) => setCurrentWorkoutPlan({ ...currentWorkoutPlan, warmup: e.target.value })}
                />
                <input
                    type="text"
                    className="form-control inpt mt-2"
                    placeholder="Exercises"
                    value={currentWorkoutPlan.exercises}
                    onChange={(e) => setCurrentWorkoutPlan({ ...currentWorkoutPlan, exercises: e.target.value })}
                />
                <input
                    type="text"
                    className="form-control inpt mt-2"
                    placeholder="Cool-down"
                    value={currentWorkoutPlan.cooldown}
                    onChange={(e) => setCurrentWorkoutPlan({ ...currentWorkoutPlan, cooldown: e.target.value })}
                />
                <input
                    type="text"
                    className="form-control inpt mt-2"
                    placeholder="Exercise Name"
                    value={currentWorkoutPlan.name}
                    onChange={(e) => setCurrentWorkoutPlan({ ...currentWorkoutPlan, name: e.target.value })}
                />
                <input
                    type="text"
                    className="form-control inpt mt-2"
                    placeholder="Duration"
                    value={currentWorkoutPlan.duration}
                    onChange={(e) => setCurrentWorkoutPlan({ ...currentWorkoutPlan, duration: e.target.value })}
                />
                <input
                    type="text"
                    className="form-control inpt mt-2"
                    placeholder="Frequency"
                    value={currentWorkoutPlan.frequency}
                    onChange={(e) => setCurrentWorkoutPlan({ ...currentWorkoutPlan, frequency: e.target.value })}
                />
                <input
                    type="text"
                    className="form-control inpt mt-2"
                    placeholder="Intensity"
                    value={currentWorkoutPlan.intensity}
                    onChange={(e) => setCurrentWorkoutPlan({ ...currentWorkoutPlan, intensity: e.target.value })}
                />
                <input
                    type="text"
                    className="form-control inpt mt-2"
                    placeholder="Description"
                    value={currentWorkoutPlan.description}
                    onChange={(e) => setCurrentWorkoutPlan({ ...currentWorkoutPlan, description: e.target.value })}
                />
                {editing ? (
                    <button className="btn btn-success mt-2 btnn" onClick={saveWorkoutPlan}>Save</button>
                ) : (
                    <button className="btn btn-primary mt-2 btnnn" onClick={addWorkoutPlan}>Add Workout Plan</button>
                )}
            </div>
            
            <ul className="list-group inpt">
                {workoutPlans.map(plan => (
                    <li key={plan._id} className="list-group-item d-flex justify-content-between align-items-center">
                        <div>
                            <strong>{plan.planName}</strong>: {plan.level}
                            {plan.types}
                        </div>
                        <div>
                            <button className="btn btn-warning mr-2" onClick={() => updateWorkoutPlan(plan)}>Edit</button>
                            <button className="btn btn-danger" onClick={() => deleteWorkoutPlan(plan._id)}>Delete</button>
                        </div>
                    </li>
                   
                ))}
             </ul>
             
        </div>
        </div>
        </div>
        </div>
    );
};

export default WorkoutPlan;
