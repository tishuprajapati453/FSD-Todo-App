import TaskItem from './TaskItem';

function TaskList({ todos, onToggle, onDelete, onEdit }) {
  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {todos.length === 0 && <p>No tasks yet. Add one!</p>}
      {todos.map((todo) => (
        <TaskItem key={todo._id} todo={todo} onToggle={() => onToggle(todo._id)} onDelete={() => onDelete(todo._id)} onEdit={onEdit} />
      ))}
    </ul>
  );
}
export default TaskList;