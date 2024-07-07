// src/App.js
import React, { useState } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import {  createTask, updateTask } from './services/taskService';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import Home from './components/Home';
import  Profile from './components/Profile';

//import GoalsPage from './components/GoalsPage';
//import Goals from './components/Goals';
import WorkoutPlan from './components/WorkoutPlan';

import WorkoutType from './components/WorkoutType';
import Diet from './components/Diet'
import Track from './components/Track';
//import ProtectedRoute from './components/ProtectedRoute';
import GoalsPage from './components/GoalsPage';

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  return token ? children : <Navigate to="/login" />;
};




const App = () => {
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState(null);

  
  const handleTaskCreated = async (newTask) => {
    const result = await createTask(newTask);
    setTasks([...tasks, result.data]);
  };

  const handleTaskUpdated = async (updatedTask) => {
    const result = await updateTask(updatedTask._id, updatedTask);
    setTasks(tasks.map(task => (task._id === updatedTask._id ? result.data : task)));
    setCurrentTask(null);
  };

  






  return (
    <Router>
       
    
      <Routes>
        
     
      <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
      
        <Route path="/goals" element={<GoalsPage/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/anu" element={ <div>
      
      <TaskForm
        onTaskCreated={handleTaskCreated}
        onTaskUpdated={handleTaskUpdated}
        currentTask={currentTask}
      />
      <TaskList/></div>}/>
    
      <Route path="/kallu" element={<WorkoutType/>} />
      <Route path="/udhi" element={<WorkoutPlan/>} />
      <Route path="/diet" element={<Diet/>} />
      <Route path="/track" element={<Track/>} />
        

      
        <Route path="*" element={<Navigate to="/login" state={{ message: 'Please log in with your username and password.' }} />} />
        
      </Routes>
    </Router>
  );
};

export default App;
