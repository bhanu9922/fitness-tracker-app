import React, { useEffect, useState } from 'react';
import { getTasks, deleteTask, updateTask } from '../services/taskService';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState(null);
  const [editTitle, setEditTitle] = useState('');
  const [editDescription, setEditDescription] = useState('');

  useEffect(() => {
    const fetchTasks = async () => {
      const result = await getTasks();
      setTasks(result.data);
    };
    fetchTasks();
  }, []);

  const handleDelete = async (id) => {
    await deleteTask(id);
    setTasks(tasks.filter(task => task._id !== id));
  };

  const handleEditClick = (task) => {
    setCurrentTask(task);
    setEditTitle(task.title);
    setEditDescription(task.description);
  };

  const handleUpdate = async () => {
    const updatedTask = {
      ...currentTask,
      title: editTitle,
      description: editDescription,
    };
    const result = await updateTask(currentTask._id, updatedTask);
    setTasks(tasks.map(task => (task._id === currentTask._id ? result : task)));
    setCurrentTask(null);
    setEditTitle('');
    setEditDescription('');
  };

  return (
    <div>
      <h1>Task List</h1>
      <ul>
        {tasks.map(task => (
          <li key={task._id}>
            {task.title} - {task.description} - {task.completed ? 'Completed' : 'Pending'}
            <button onClick={() => handleDelete(task._id)}>Delete</button>
            <button onClick={() => handleEditClick(task)}>Edit</button>
          </li>
        ))}
      </ul>
      {currentTask && (
        <div>
          <h2>Edit Task</h2>
          <form onSubmit={(e) => { e.preventDefault(); handleUpdate(); }}>
            <label>
              Title:
              <input
                type="text"
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
              />
            </label>
            <br />
            <label>
              Description:
              <input
                type="text"
                value={editDescription}
                onChange={(e) => setEditDescription(e.target.value)}
              />
            </label>
            <br />
            <button type="submit">Save</button>
            <button type="button" onClick={() => setCurrentTask(null)}>Cancel</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default TaskList;
