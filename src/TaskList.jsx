import TaskItem from './TaskItem';

function TaskList({ todos, onToggle, onDelete, onEdit }) {
  return (
    <ul>
      {todos.length === 0 && <p>No tasks yet. Add one!</p>}
      {todos.map((todo) => (
        <TaskItem key={todo._id} todo={todo} onToggle={onToggle} onDelete={onDelete} onEdit={onEdit} />
      ))}
    </ul>
  );
}

export default TaskList;