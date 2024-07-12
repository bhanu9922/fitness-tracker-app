import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Track = () => {
    const [tracks, setTracks] = useState([]);
    const [currentTrack, setCurrentTrack] = useState({
        username: '',
        workoutsDone: '',
        sleep: '',
        steps: '',
        reminders: ['']
    });
    const [editing, setEditing] = useState(false);

    useEffect(() => {
        fetchTracks();
    }, []);

    const fetchTracks = async () => {
        try {
            const response = await axios.get('https://fitness-tracker-app-1.onrender.com/tracks');
            setTracks(response.data);
        } catch (error) {
            console.error('Error fetching tracks:', error);
        }
    };

    const addTrack = async () => {
        try {
            const response = await axios.post('https://fitness-tracker-app-1.onrender.com/tracks', currentTrack);
            setTracks([...tracks, response.data]);
            setCurrentTrack({ username: '', workoutsDone: '', sleep: '', steps: '', reminders: [''] });
        } catch (error) {
            console.error('Error adding track:', error);
        }
    };

    const updateTrack = (track) => {
        setCurrentTrack(track);
        setEditing(true);
    };

    const saveTrack = async () => {
        try {
            const response = await axios.patch(`https://fitness-tracker-app-1.onrender.com/tracks/${currentTrack._id}`, currentTrack);
            const updatedTracks = tracks.map(track =>
                track._id === currentTrack._id ? response.data : track
            );
            setTracks(updatedTracks);
            setCurrentTrack({ username: '', workoutsDone: '', sleep: '', steps: '', reminders: [''] });
            setEditing(false);
        } catch (error) {
            console.error('Error saving track:', error);
        }
    };

    const deleteTrack = async (id) => {
        try {
            await axios.delete(`https://fitness-tracker-app-1.onrender.com/tracks/${id}`);
            setTracks(tracks.filter(track => track._id !== id));
        } catch (error) {
            console.error('Error deleting track:', error);
        }
    };

    const handleReminderChange = (index, value) => {
        const newReminders = [...currentTrack.reminders];
        newReminders[index] = value;
        setCurrentTrack({ ...currentTrack, reminders: newReminders });
    };

    const addReminder = () => {
        setCurrentTrack({
            ...currentTrack,
            reminders: [...currentTrack.reminders, '']
        });
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
      <div className="col-12 col-md-12 boot1">
      <div className="authspro">
        <div className="container mt-5">
            <h1 class="head">Track Activities</h1>
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control inpt"
                    placeholder="Username"
                    value={currentTrack.username}
                    onChange={(e) => setCurrentTrack({ ...currentTrack, username: e.target.value })}
                />
                <input
                    type="text"
                    className="form-control inpt mt-2"
                    placeholder="Workouts Done"
                    value={currentTrack.workoutsDone}
                    onChange={(e) => setCurrentTrack({ ...currentTrack, workoutsDone: e.target.value })}
                />
                <input
                    type="number"
                    className="form-control  inpt mt-2"
                    placeholder="Sleep (hours)"
                    value={currentTrack.sleep}
                    onChange={(e) => setCurrentTrack({ ...currentTrack, sleep: e.target.value })}
                />
                <input
                    type="number"
                    className="form-control inpt mt-2"
                    placeholder="Steps"
                    value={currentTrack.steps}
                    onChange={(e) => setCurrentTrack({ ...currentTrack, steps: e.target.value })}
                />
                {currentTrack.reminders.map((reminder, index) => (
                    <input
                        key={index}
                        type="text"
                        className="form-control inpt mt-2"
                        placeholder="Reminder"
                        value={reminder}
                        onChange={(e) => handleReminderChange(index, e.target.value)}
                    />
                ))}
                <button className="btn btn-secondary mt-2 btnnn" onClick={addReminder}>Add Reminder</button>
                {editing ? (
                    <button className="btn btn-success mt-2 btnn" onClick={saveTrack}>Save</button>
                ) : (
                    <button className="btn btn-primary mt-2 btnn" onClick={addTrack}>Add Track</button>
                )}
            </div>
            <ul className="list-group">
                {tracks.map(track => (
                    <li key={track._id} className="list-group-item d-flex justify-content-between align-items-center">
                        <div>
                            <strong>{track.username}</strong>
                            <p>Workouts Done: {track.workoutsDone}</p>
                            <p>Sleep: {track.sleep} hours</p>
                            <p>Steps: {track.steps}</p>
                            <ul>
                                {track.reminders.map((reminder, index) => (
                                    <li key={index}>{reminder}</li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <button className="btn btn-warning mr-2" onClick={() => updateTrack(track)}>Edit</button>
                            <button className="btn btn-danger" onClick={() => deleteTrack(track._id)}>Delete</button>
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

export default Track;
