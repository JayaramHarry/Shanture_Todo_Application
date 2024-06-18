
import Task from '../Task/Task';
import DownloadPDF from '../DownloadPDF/DownloadPDF';
import './TaskList.css';

const TaskList = ({ tasks, fetchTasks, updateTask, deleteTask }) => {
  return (
    <div className="task-list">
      <h1>Task List</h1>
      {tasks.map((task) => (
        <Task key={task._id} task={task} updateTask={updateTask} deleteTask={deleteTask} />
      ))}
      <DownloadPDF tasks={tasks} /> {/* Add DownloadPDF button */}
    </div>
  );
};

export default TaskList;
