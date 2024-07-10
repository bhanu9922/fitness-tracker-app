// src/components/LoginForm.js
import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { useNavigate,useLocation, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';



  







const LoginForm = () => {
//extra code for nav bar
  const navigate1 = useNavigate();
  const handleLinkClick = (path) => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate1('/login', { state: { message: '' } });
    } else {
      navigate1(path);
    }
  };

//extra

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const location = useLocation();


  useEffect(() => {
    if (location.state?.message) {
      setMessage(location.state.message);
    }
  }, [location.state]);



  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('https://fitness-tracker-app-uu0j.onrender.com/api/users/login', { username, password });
      const { token, user } = response.data;
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      setMessage('Login successful!');
      navigate('/home', { state: { message: 'Login successful! Enjoy our service.' } });
    } catch (error) {
      setMessage('Invalid credentials. Please try again.');
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
                            <Link to="#" onClick={() => handleLinkClick('/home')} className='custom-link sechead' state={{ message: 'Please log in with your username and password.' }}>Home</Link>
      
        <Link to="#" onClick={() => handleLinkClick('/profile')} className='custom-link sechead' state={{ message: 'Please log in with your username and password.' }  }>Profile</Link>
        <Link to="#" onClick={() => handleLinkClick('/goals')} className='custom-link sechead' state={{ message: 'Please log in with your username and password.' }}>Goals</Link>
        <Link to="#" onClick={() => handleLinkClick('/')} className='custom-link sechead' state={{ message: 'Please log in with your username and password.' }}>Workout Plans</Link>
        <Link to="#" onClick={() => handleLinkClick('/')} className='custom-link sechead' state={{ message: 'Please log in with your username and password.' }}>Workout Types</Link>
        <Link to="#" onClick={() => handleLinkClick('/diet')}  className='custom-link sechead' state={{ message: 'Please log in with your username and password.' }}>Diet</Link>
        <Link to="#" onClick={() => handleLinkClick('/track')} className='custom-link sechead' state={{ message: 'Please log in with your username and password.' }}>Track</Link>
      
    </nav>
                

                                
                           
                            </div>
                        </div>
                    </nav>


                </div>
                <div class="col-12 col-md-12  boot ">
                <div class="auths">
      <form onSubmit={handleSubmit} action="action_page.php" method="post" >
      <div class="imgcontainer">
    <img src="https://banner2.cleanpng.com/lnd/20240531/xop/ayxx1t32h.webp" alt="Avatar" class="avatar"/>
  </div >
  <div class="container">
        <div >
          <label for="uname" class="name1"><b class="break">Username:</b></label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter Username" name="uname" required
          />
        </div>
        <div>
          <label for="psw" class="name1"><b class="break">Password:</b></label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
             placeholder="Enter Password" name="psw" required
          />
        </div>
        
        <button type="submit">Login</button>
        
    </div>
   
    
      {message && <p style={{ color:'red',fontWeight:'bold' ,textShadow:'2px 2px 8px #000000'}}>{message}</p>}
      <p class="pra">
        Don't have an account? <Link to="/register"><button class="bg-primary">Register here</button></Link>
      </p>
      </form>
    </div>
                </div>
            </div>
    
           
  );
};

export default LoginForm;
