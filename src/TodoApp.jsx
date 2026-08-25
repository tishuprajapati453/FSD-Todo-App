
import { useState, useEffect, useRef, useMemo } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import { useTheme } from './ThemeContext';

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const inputRef = useRef(null);
  const { darkMode } = useTheme();

  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
    setIsLoaded(true);
    // Page load thay tyare input par automatically focus karo
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  }, [todos, isLoaded]);

  // useMemo - completed tasks no count, fakt todos change thay tyare j recalculate thay
  const completedCount = useMemo(() => {
    return todos.filter((todo) => todo.completed).length;
  }, [todos]);

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
    <div
      style={{
        maxWidth: '500px',
        margin: '50px auto',
        fontFamily: 'Arial',
        backgroundColor: darkMode ? '#222' : '#fff',
        color: darkMode ? '#fff' : '#000',
        padding: '20px',
        borderRadius: '8px',
      }}
    >
      <h1>My Todo List</h1>
      <p>
        Total tasks: {todos.length} | Completed: {completedCount}
      </p>
      <TaskForm onAddTask={addTask} inputRef={inputRef} />
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