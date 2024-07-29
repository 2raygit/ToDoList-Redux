import  { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../todosSlice';
import { nanoid } from 'nanoid';

const AddTask = () => {
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.trim()) {
      dispatch(addTodo({
        id: nanoid(),
        description,
        isDone: false,
      }));
      setDescription('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border p-2 mr-2"
        placeholder="Ajouter une nouvelle tâche"
      />
      <button type="submit" className="bg-blue-500 text-white p-2">Ajouter Tâche</button>
    </form>
  );
};

export default AddTask;
