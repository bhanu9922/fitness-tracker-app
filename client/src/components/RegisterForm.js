// src/components/RegisterForm.js
import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('http://localhost:3000/api/users/register', { username, password });
      setMessage('Registration successful! You can now log in.');
      setIsSuccess(true);
    } catch (error) {
      setMessage('Registration failed. Please try again.');
      setIsSuccess(false);
    }
  };

  return (
    <div class="box">
        
                <div class="col-12">
                    <nav class="navbar navbar-expand-lg navbar-light bg-black navb">
                        <a class="navbar-brand" href="#">

                            <img src="https://res.cloudinary.com/dfu4raix4/image/upload/v1718950120/atklqo31snvpy22d82t9.png" class="img" />



                        </a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div class="navbar-nav ml-auto">


                            <nav >
                            <Link to="#"  className='custom-link sechead' state={{ message: 'Please log in with your username and password.' }}>Home</Link>
      
        <Link to="#"  className='custom-link sechead' state={{ message: 'Please log in with your username and password.' }  }>Profile</Link>
        <Link to="#"  className='custom-link sechead' state={{ message: 'Please log in with your username and password.' }}>Goals</Link>
        <Link to="#"  className='custom-link sechead' state={{ message: 'Please log in with your username and password.' }}>Workout Plans</Link>
        <Link to="#" className='custom-link sechead' state={{ message: 'Please log in with your username and password.' }}>Workout Types</Link>
        <Link to="#"   className='custom-link sechead' state={{ message: 'Please log in with your username and password.' }}>Diet</Link>
        <Link to="#"  className='custom-link sechead' state={{ message: 'Please log in with your username and password.' }}>Track</Link>
      
    </nav>
                

                                
                           
                            </div>
                        </div>
                    </nav>


                </div>
                <div class="col-12 col-md-12  boot ">
    <div class="auths">
      <form onSubmit={handleSubmit}>
        <div>
          <label class="name1"><b class="break">Username:</b></label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label class="name1"><b class="break">Password:</b></label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Register</button>
      </form>
      {message && (
         <p style={{ color:'GREEN',fontWeight:'bold' ,textShadow:'2px 2px 8px #000000'}}>{message}</p>
      )}
      {isSuccess && (
        <p class="pra">
          <Link to="/login">
          Click here to log in</Link>
        </p>
      )}
      {!isSuccess && (
        <p class="pra">
          Already have an account? <Link to="/login"><button class="pra btn bg-primary">Login here</button></Link>
        </p>
      )}
    </div>
    </div>
    </div>

  );
};

export default RegisterForm;
