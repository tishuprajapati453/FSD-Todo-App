function TaskItem({ todo, onToggle, onDelete }) {
  return (
    <li
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '8px',
        borderBottom: '1px solid #ccc',
        textDecoration: todo.completed ? 'line-through' : 'none',
      }}
    >
      <span onClick={() => onToggle(todo.id)} style={{ cursor: 'pointer' }}>
        {todo.text}
      </span>
      <button onClick={() => onDelete(todo.id)} style={{ color: 'red' }}>
        Delete
      </button>
    </li>
  );
}

export default TaskItem;