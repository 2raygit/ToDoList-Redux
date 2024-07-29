
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../todosSlice';
import Task from './Task';

const TaskList = () => {
  const todos = useSelector((state) => state.todos.todos);
  const filter = useSelector((state) => state.todos.filter);
  const dispatch = useDispatch();

  const filteredTodos = todos.filter(todo => {
    if (filter === 'all') return true;
    if (filter === 'done') return todo.isDone;
    if (filter === 'not_done') return !todo.isDone;
    return true;
  });

  return (
    <div>
      <div className="mb-4">
        <button onClick={() => dispatch(setFilter('all'))} className="mr-2">Tous</button>
        <button onClick={() => dispatch(setFilter('done'))} className="mr-2">Effectués</button>
        <button onClick={() => dispatch(setFilter('not_done'))}>Non effectués</button>
      </div>
      {filteredTodos.map((todo) => (
        <Task key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TaskList;
