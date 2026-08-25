import { useState } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

function TodoApp() {
  const [todos, setTodos] = useState([]);

  const addTask = (taskText) => {
    const newTodo = {
      id: Date.now(),
      text: taskText,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTask = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div style={{ maxWidth: '500px', margin: '50px auto', fontFamily: 'Arial' }}>
      <h1>My Todo List</h1>
      <TaskForm onAddTask={addTask} />
      <TaskList todos={todos} onToggle={toggleComplete} onDelete={deleteTask} />
    </div>
  );
}

export default TodoApp;