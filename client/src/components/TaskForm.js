import React, { useState, useEffect } from 'react';

const TaskForm = ({ onTaskCreated, onTaskUpdated, currentTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isEditMode, setIsEditMode] = useState(false);

  useEffect(() => {
    if (currentTask) {
      setTitle(currentTask.title);
      setDescription(currentTask.description);
      setIsEditMode(true);
    } else {
      setTitle('');
      setDescription('');
      setIsEditMode(false);
    }
  }, [currentTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditMode) {
      onTaskUpdated({ ...currentTask, title, description });
    } else {
      onTaskCreated({ title, description, completed: false });
    }
    setTitle('');
    setDescription('');
    setIsEditMode(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
      </div>
      <div>
        <label>Description</label>
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} required />
      </div>
      <button type="submit">{isEditMode ? 'Update Task' : 'Add Task'}</button>
    </form>
  );
};

export default TaskForm;
