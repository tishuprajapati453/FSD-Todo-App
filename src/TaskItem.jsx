import { useState } from 'react';

function TaskItem({ todo, onToggle, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleSave = () => {
    if (editText.trim() === '') {
      alert('Task cannot be empty');
      return;
    }
    onEdit(todo.id, editText);
    setIsEditing(false);
  };

  return (
    <li
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '8px',
        borderBottom: '1px solid #ccc',
      }}
    >
      {isEditing ? (
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          style={{ flex: 1, marginRight: '10px', padding: '4px' }}
        />
      ) : (
        <span
          onClick={() => onToggle(todo.id)}
          style={{
            cursor: 'pointer',
            textDecoration: todo.completed ? 'line-through' : 'none',
            flex: 1,
          }}
        >
          {todo.text}
        </span>
      )}

      <div style={{ display: 'flex', gap: '8px' }}>
        {isEditing ? (
          <button onClick={handleSave}>Save</button>
        ) : (
          <button onClick={() => setIsEditing(true)}>Edit</button>
        )}
        <button onClick={() => onDelete(todo.id)} style={{ color: 'red' }}>
          Delete
        </button>
      </div>
    </li>
  );
}

export default TaskItem;