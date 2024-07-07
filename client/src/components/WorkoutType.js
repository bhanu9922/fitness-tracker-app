import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const WorkoutType = () => {
    const [workoutTypes, setWorkoutTypes] = useState([]);
    const [currentWorkoutType, setCurrentWorkoutType] = useState({ type: '', description: '' });
    const [editing, setEditing] = useState(false);

    useEffect(() => {
        fetchWorkoutTypes();
    }, []);

    const fetchWorkoutTypes = async () => {
        try {
            const response = await axios.get('http://localhost:3000/workout-types'); // Update this URL to your backend endpoint
            setWorkoutTypes(response.data);
        } catch (error) {
            console.error('Error fetching workout types:', error);
        }
    };

    const addWorkoutType = async () => {
        try {
            const response = await axios.post('http://localhost:3000/workout-types', currentWorkoutType); // Update this URL to your backend endpoint
            setWorkoutTypes([...workoutTypes, response.data]);
            setCurrentWorkoutType({ type: '', description: '' });
        } catch (error) {
            console.error('Error adding workout type:', error);
        }
    };

    const updateWorkoutType = (type) => {
        setCurrentWorkoutType(type);
        setEditing(true);
    };

    const saveWorkoutType = async () => {
        try {
            const response = await axios.patch(`http://localhost:3000/workout-types/${currentWorkoutType._id}`, currentWorkoutType); // Update this URL to your backend endpoint
            const updatedTypes = workoutTypes.map(type =>
                type._id === currentWorkoutType._id ? response.data : type
            );
            setWorkoutTypes(updatedTypes);
            setCurrentWorkoutType({ type: '', description: '' });
            setEditing(false);
        } catch (error) {
            console.error('Error saving workout type:', error);
        }
    };

    const deleteWorkoutType = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/workout-types/${id}`); // Update this URL to your backend endpoint
            setWorkoutTypes(workoutTypes.filter(type => type._id !== id));
        } catch (error) {
            console.error('Error deleting workout type:', error);
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
                <Link to="/diet" className="custom-link sechead" state={{ message: 'Please log in with your username and password.' }}>Diet</Link>
                <Link to="/track" className="custom-link sechead" state={{ message: 'Please log in with your username and password.' }}>Track</Link>
              </nav>
            </div>
          </div>
        </nav>
      </div>
      <div className="col-12 col-md-12 bootpro">
      <div className="authspro">
        <div className="container mt-5">
            <h1 class="head">Workout Types</h1>
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control inpt"
                    placeholder="Type"
                    value={currentWorkoutType.type}
                    onChange={(e) => setCurrentWorkoutType({ ...currentWorkoutType, type: e.target.value })}
                />
                <input
                    type="text"
                    className="form-control inpt mt-2"
                    placeholder="Description"
                    value={currentWorkoutType.description}
                    onChange={(e) => setCurrentWorkoutType({ ...currentWorkoutType, description: e.target.value })}
                />
                {editing ? (
                    <button className="btn btn-success mt-2 btnn" onClick={saveWorkoutType}>Save</button>
                ) : (
                    <button className="btn btn-primary mt-2 btnnn" onClick={addWorkoutType}>Add Workout Type</button>
                )}
            </div>
            <ul className="list-group">
                {workoutTypes.map(type => (
                    <li key={type._id} className="list-group-item d-flex justify-content-between align-items-center">
                        <div>
                            <strong>{type.type}</strong>: {type.description}
                        </div>
                        <div>
                            <button className="btn btn-warning mr-2" onClick={() => updateWorkoutType(type)}>Edit</button>
                            <button className="btn btn-danger" onClick={() => deleteWorkoutType(type._id)}>Delete</button>
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

export default WorkoutType;
