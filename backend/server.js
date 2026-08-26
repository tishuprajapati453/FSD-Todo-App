const express = require('express');
const app = express();

app.use(express.json());

// Sample todos data (abhi mate hardcoded, Week 9-10 ma MongoDB thi aavse)
let todos = [
  { id: 1, text: 'Learn Express.js', completed: false },
  { id: 2, text: 'Build REST API', completed: false },
];

// Home route
app.get('/', (req, res) => {
  res.send('Welcome to the Todo App Backend API!');
});

// Get all todos
app.get('/api/todos', (req, res) => {
  res.json(todos);
});

// Get a single todo by id
app.get('/api/todos/:id', (req, res) => {
  const todo = todos.find((t) => t.id === parseInt(req.params.id));
  if (!todo) {
    return res.status(404).json({ message: 'Todo not found' });
  }
  res.json(todo);
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});