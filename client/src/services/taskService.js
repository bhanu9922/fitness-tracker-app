import axios from 'axios';

const API_URL = 'http://localhost:3000/tasks'; // Replace with your backend URL

export const fetchTasks = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching tasks:', error);
    throw error;
  }
};

export const createTask = async (newTask) => {
  try {
    const response = await axios.post(API_URL, newTask);
    return response.data;
  } catch (error) {
    console.error('Error creating task:', error);
    throw error;
  }
};

export const updateTask = async (taskId, updatedTask) => {
  try {
    const response = await axios.patch(`${API_URL}/${taskId}`, updatedTask);
    return response.data;
  } catch (error) {
    console.error('Error updating task:', error);
    throw error;
  }
};




   export const getTasks = async () => {
     return await axios.get(API_URL);
   };

   export const getTask = async (id) => {
     return await axios.get(`${API_URL}/${id}`);
   };

 

 

   export const deleteTask = async (id) => {
     return await axios.delete(`${API_URL}/${id}`);
   };

