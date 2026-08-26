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

// CREATE - Add a new todo
app.post('/api/todos', async (req, res) => {
  try {
    const newTodo = new Todo({ text: req.body.text });
    await newTodo.save();
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(500).json({ message: 'Error creating todo', error: error.message });
  }
});

// READ - Get all todos
app.get('/api/todos', async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching todos', error: error.message });
  }
});

// READ - Get a single todo by id
app.get('/api/todos/:id', async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) {
      return res.status(404).json({ message: 'Todo not found' });
    }
    res.json(todo);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching todo', error: error.message });
  }
});

// UPDATE - Update a todo (text or completed status)
app.put('/api/todos/:id', async (req, res) => {
  try {
    const updatedTodo = await Todo.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedTodo) {
      return res.status(404).json({ message: 'Todo not found' });
    }
    res.json(updatedTodo);
  } catch (error) {
    res.status(500).json({ message: 'Error updating todo', error: error.message });
  }
});

// DELETE - Delete a todo
app.delete('/api/todos/:id', async (req, res) => {
  try {
    const deletedTodo = await Todo.findByIdAndDelete(req.params.id);
    if (!deletedTodo) {
      return res.status(404).json({ message: 'Todo not found' });
    }
    res.json({ message: 'Todo deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting todo', error: error.message });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});