const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

// MongoDB Connection
const MONGO_URI = 'mongodb://todoadmin:todo12345@ac-kohtsby-shard-00-00.nxljkhd.mongodb.net:27017,ac-kohtsby-shard-00-01.nxljkhd.mongodb.net:27017,ac-kohtsby-shard-00-02.nxljkhd.mongodb.net:27017/?ssl=true&replicaSet=atlas-av150p-shard-0&authSource=admin&appName=Cluster0'

mongoose.connect(MONGO_URI)
  .then(() => console.log('MongoDB Connected Successfully!'))
  .catch((err) => console.log('MongoDB Connection Error:', err));

// Todo Schema
const todoSchema = new mongoose.Schema({
  text: { type: String, required: true },
  completed: { type: Boolean, default: false },
});

const Todo = mongoose.model('Todo', todoSchema);

// Home route
app.get('/', (req, res) => {
  res.send('Welcome to the Todo App Backend API!');
});

// Get all todos
app.get('/api/todos', async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});

// Create a new todo
app.post('/api/todos', async (req, res) => {
  const newTodo = new Todo({ text: req.body.text });
  await newTodo.save();
  res.json(newTodo);
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});