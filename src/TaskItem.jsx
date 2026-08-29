import { useState } from 'react';

function TaskItem({ todo, onToggle, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleSave = () => {
    onEdit(todo._id, editText);
    setIsEditing(false);
  };

  return (
    <li>
      {isEditing ? (
        <input value={editText} onChange={(e) => setEditText(e.target.value)} />
      ) : (
        <span onClick={onToggle} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
          {todo.text}
        </span>
      )}
      {isEditing ? <button onClick={handleSave}>Save</button> : <button onClick={() => setIsEditing(true)}>Edit</button>}
      <button onClick={onDelete}>Delete</button>
    </li>
  );
}

export default TaskItem;