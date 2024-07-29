import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, editTodo } from '../todosSlice';
import PropTypes from 'prop-types';

const Task = ({ todo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [description, setDescription] = useState(todo.description);
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTodo(todo.id));
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    dispatch(editTodo({ id: todo.id, description }));
    setIsEditing(false);
  };

  return (
    <div className="border p-2 mb-2 flex justify-between items-center">
      <div>
        <input type="checkbox" checked={todo.isDone} onChange={handleToggle} />
        {isEditing ? (
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="ml-2 border p-1"
          />
        ) : (
          <span className={`ml-2 ${todo.isDone ? 'line-through' : ''}`}>{todo.description}</span>
        )}
      </div>
      {isEditing ? (
        <button onClick={handleSave} className="bg-green-500 text-white p-2">Sauvegarder</button>
      ) : (
        <button onClick={handleEdit} className="bg-yellow-500 text-white p-2">Modifier</button>
      )}
    </div>
  );
};

export default Task;
Task.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    isDone: PropTypes.bool.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};
