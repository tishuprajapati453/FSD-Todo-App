import { useState } from 'react';

function TaskForm({ onAddTask, inputRef }) {
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
    <div className="task-form">
      <input
        ref={inputRef}
        type="text"
        placeholder="Enter a task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default TaskForm;