import { useState } from 'react';

function TaskForm({ onAddTask }) {
  const [task, setTask] = useState('');

  const handleAdd = () => {
    if (task.trim() === '') {
      alert('Please enter a task');
      return;
    }
    onAddTask(task);
    setTask('');
  };

  return (
    <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
      <input
        type="text"
        placeholder="Enter a task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        style={{ flex: 1, padding: '8px' }}
      />
      <button onClick={handleAdd} style={{ padding: '8px 16px' }}>
        Add
      </button>
    </div>
  );
}

export default TaskForm;