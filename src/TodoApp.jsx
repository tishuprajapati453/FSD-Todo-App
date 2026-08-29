import { useState, useEffect, useRef, useMemo } from 'react';
import axios from 'axios';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import { useTheme } from './ThemeContext';

const API_URL = 'https://fsd-todo-app-production.up.railway.app/api/todos';

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef(null);
  const { darkMode } = useTheme();

  useEffect(() => {
    fetchTodos();
    inputRef.current?.focus();
  }, []);

  const fetchTodos = async () => {
    const res = await axios.get(API_URL);
    setTodos(res.data);
  };

  const completedCount = useMemo(() => {
    return todos.filter((todo) => todo.completed).length;
  }, [todos]);

  const addTask = async (taskText) => {