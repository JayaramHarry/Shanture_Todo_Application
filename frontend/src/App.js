// App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskList from './components/TaskList/TaskList';
import AddTask from './components/AddTask/AddTask';
import Logo from "./assest/shanture_logo.jpeg"
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const response = await axios.get('http://localhost:5000/tasks');
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const updateTask = async (id, updatedTask) => {
    try {
      await axios.put(`http://localhost:5000/tasks/${id}`, updatedTask);
      fetchTasks();
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/tasks/${id}`);
      fetchTasks();
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="app-container">
      <div className='logo-container'>
        <img src={Logo} alt="logo"/>
      <h1>To-Do List Application</h1>
      </div>
      <AddTask fetchTasks={fetchTasks} />
      <TaskList tasks={tasks} fetchTasks={fetchTasks} updateTask={updateTask} deleteTask={deleteTask} />
    </div>
  );
};

export default App;
