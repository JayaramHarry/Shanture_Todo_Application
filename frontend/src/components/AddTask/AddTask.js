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
        if (error.response) {
          // Server responded with a status other than 2xx
          console.error('Response data:', error.response.data);
          console.error('Response status:', error.response.status);
          console.error('Response headers:', error.response.headers);
        } else if (error.request) {
          // Request was made but no response received
          console.error('Request data:', error.request);
        } else {
          // Something happened in setting up the request
          console.error('Error message:', error.message);
        }
        alert('Error adding task. Please try again later.');
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
