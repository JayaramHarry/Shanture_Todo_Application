import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import './Task.css';

const Task = ({ task, updateTask, deleteTask }) => {
  const handleCheckboxChange = () => {
    const updatedTask = { ...task, completed: !task.completed };
    updateTask(task._id, updatedTask);
  };

  return (
    <div className={`task ${task.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={handleCheckboxChange}
        readOnly
      />
      <span>{task.description}</span>
      <button onClick={() => deleteTask(task._id)}>
        <DeleteIcon />
      </button>
    </div>
  );
};

export default Task;
