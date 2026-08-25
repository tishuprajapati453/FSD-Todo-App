import { useState, useEffect } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Component load thay tyare localStorage mathi data lavo
  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
    setIsLoaded(true);
  }, []);

  // Jyare pan todos change thay, localStorage ma save karo (pan fakt load thai gaya pachi j)
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  }, [todos, isLoaded]);

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

  const editTask = (id, newText) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  return (
    <div style={{ maxWidth: '500px', margin: '50px auto', fontFamily: 'Arial' }}>
      <h1>My Todo List</h1>
      <TaskForm onAddTask={addTask} />
      <TaskList
        todos={todos}
        onToggle={toggleComplete}
        onDelete={deleteTask}
        onEdit={editTask}
      />
    </div>
  );
}

export default TodoApp;