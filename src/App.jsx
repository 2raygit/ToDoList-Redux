
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';

const App = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl mb-4">Liste de Tâches</h1>
      <AddTask />
      <TaskList />
    </div>
  );
};

export default App;
