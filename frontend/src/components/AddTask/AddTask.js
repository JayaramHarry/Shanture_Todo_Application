// AddTask.js
import React, { useState } from 'react';
import axios from 'axios';
import './AddTask.css';

const AddTask = ({ fetchTasks }) => {
  const [newTaskDescription, setNewTaskDescription] = useState('');

  const handleInputChange = (event) => {
    setNewTaskDescription(event.target.value);
  };

  const handleAddTask = async () => {
    if (newTaskDescription.trim() !== '') {
      try {
        await axios.post('https://shanture-todo-application.onrender.com/tasks', {
          description: newTaskDescription,
          completed: false,
        });
        fetchTasks(); // Refresh tasks list after adding a new task
        setNewTaskDescription(''); // Clear input field
      } catch (error) {
        console.error('Error adding task:', error);
      }
    } else {
      alert('Please enter a task description');
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleAddTask();
    }
  };

  return (
    <div className="add-task-container">
      <input
        type="text"
        value={newTaskDescription}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        placeholder="Enter new task"
      />
      <button className="add-task-button" onClick={handleAddTask}>
        Add Task
      </button>
    </div>
  );
};

export default AddTask;
