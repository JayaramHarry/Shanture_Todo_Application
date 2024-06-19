// // Require necessary packages
// const express = require('express');
// const cors = require('cors');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');

// // Initialize Express app
// const app = express();

// app.use(cors());

// // Middleware
// app.use(bodyParser.json());

// // MongoDB Connection
// const mongoURI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/todo';
// mongoose.connect(mongoURI);

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', () => {
//   console.log('Connected to MongoDB');
// });

// // Define Task Schema and Model
// const taskSchema = new mongoose.Schema({
//   description: String,
//   completed: Boolean,
// });

// const Task = mongoose.model('Task', taskSchema);

// // Routes

// // Get all tasks
// app.get('/tasks', async (req, res) => {
//   try {
//     const tasks = await Task.find({});
//     res.json(tasks);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Server error' });
//   }
// });

// // Create a new task
// app.post('/tasks', async (req, res) => {
//   try {
//     const newTask = new Task(req.body);
//     await newTask.save();
//     res.json(newTask);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Server error' });
//   }
// });

// // Update a task
// app.put('/tasks/:id', async (req, res) => {
//   try {
//     const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     res.json(updatedTask);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Server error' });
//   }
// });

// // Delete a task
// app.delete('/tasks/:id', async (req, res) => {
//   try {
//     await Task.findByIdAndDelete(req.params.id);
//     res.json({ message: 'Task deleted' });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Server error' });
//   }
// });

// // Start the server
// const PORT = 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

// Require necessary packages
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Initialize Express app
const app = express();

// Middleware
app.use(bodyParser.json());

// CORS Configuration
const allowedOrigins = ['http://localhost:3000', 'http://localhost:5000'];

const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204
};

app.use(cors(corsOptions));

// MongoDB Connection
const mongoURI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/todo';
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Define Task Schema and Model
const taskSchema = new mongoose.Schema({
  description: String,
  completed: Boolean,
});

const Task = mongoose.model('Task', taskSchema);

// Routes

// Get all tasks
app.get('/tasks', async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.json(tasks);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Create a new task
app.post('/tasks', async (req, res) => {
  try {
    const newTask = new Task(req.body);
    await newTask.save();
    res.json(newTask);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Update a task
app.put('/tasks/:id', async (req, res) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedTask);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Delete a task
app.delete('/tasks/:id', async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: 'Task deleted' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

