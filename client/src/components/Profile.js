// src/components/RegisterForm.js
import React, { useState } from 'react';
import axios from 'axios';
import { Link,useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Profile = () => {
  const location = useLocation();
const messages = location.state?.messages;
  const [profile, setProfile] = useState({
    Name: '',
    Age: '',
    Gender: '',
    height: '',
    weight: '',
    Mail_id: '',
    Phone_number: '',
    Adress: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({
      ...profile,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('https://fitness-tracker-app-1.onrender.com/api/profile/bhanu', profile);
      setMessage('Registration successful!');
    } catch (error) {
      setMessage('Save failed. Please try again.');
    }
  };

  return (
    <div className="box">
      <div className="col-12">
        <nav className="navbar navbar-expand-lg navbar-light bg-black navb">
          <a className="navbar-brand">
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
          <h1 class="head">Profile Details</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label className="name1"><b className="break">Name:</b></label>
              <input
                type="string"
                name="Name"
                value={profile.Name}
                onChange={handleChange}
                className="inpt"
              />
            </div>
            <div>
              <label className="name1"><b className="break">Age:</b></label>
              <input
              
                type="number"
                name="Age"
                value={profile.Age}
                onChange={handleChange}
                className="inpt"
              />
            </div>
            <div>
              <label className="name1"><b className="break">Gender:</b></label>
              <select
                name="Gender"
                value={profile.Gender}
                onChange={handleChange}
                className="inpt"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label className="name1"><b className="break">Height:</b></label>
              <input
                type="number"
                name="height"
                value={profile.height}
                onChange={handleChange}
                className="inpt"
              />
            </div>
            <div>
              <label className="name1"><b className="break">Weight:</b></label>
              <input
                type="number"
                name="weight"
                value={profile.weight}
                onChange={handleChange}
                className="inpt"
              />
            </div>
            <div>
              <label className="name1"><b className="break">Mail ID:</b></label>
              <input
                type="email"
                name="Mail_id"
                value={profile.Mail_id}
                onChange={handleChange}
                className="inpt"
              />
            </div>
            <div>
              <label className="name1"><b className="break">Phone Number:</b></label>
              <input
                type="tel"
                name="Phone_number"
                value={profile.Phone_number}
                onChange={handleChange}
                className="inpt"
              />
            </div>
            <div>
              <label className="name1"><b className="break">Address:</b></label>
              <input
                type="text"
                name="Adress"
                value={profile.Adress}
                onChange={handleChange}
                className="inpt"
              />
            </div>
            <button type="submit" className="btn btn-primary btnn">Save</button>
          </form>
          {message && (
            <p style={{ color: 'green', fontWeight: 'bolder', textShadow: '2px 2px 8px black',backgroundColor:'whitesmoke',fontSize:'24px' }}>{message}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
