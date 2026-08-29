import { useState, useEffect } from 'react';
import axios from 'axios';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

const API_URL = 'http://localhost:5000/api/todos';

function TodoApp() {
  const [todos, setTodos] = useState([]);

  // Fetch todos from backend on page load
  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const res = await axios.get(API_URL);
    setTodos(res.data);
  };

  const addTask = async (taskText) => {
    const res = await axios.post(API_URL, { text: taskText });
    setTodos([...todos, res.data]);
  };

  const toggleComplete = async (id) => {
    const todo = todos.find((t) => t._id === id);
    const res = await axios.put(`${API_URL}/${id}`, { completed: !todo.completed });
    setTodos(todos.map((t) => (t._id === id ? res.data : t)));
  };

  const deleteTask = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    setTodos(todos.filter((t) => t._id !== id));
  };

  const editTask = async (id, newText) => {
    const res = await axios.put(`${API_URL}/${id}`, { text: newText });
    setTodos(todos.map((t) => (t._id === id ? res.data : t)));
  };

  return (
    <div style={{ maxWidth: '500px', margin: '50px auto', fontFamily: 'Arial' }}>
      <h1>My Todo List</h1>
      <TaskForm onAddTask={addTask} />
      <TaskList todos={todos} onToggle={toggleComplete} onDelete={deleteTask} onEdit={editTask} />
    </div>
  );
}

export default TodoApp;