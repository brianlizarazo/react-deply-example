import { useContext, useState } from 'react';
import { TaskContext } from '../context/TaskContext';

function TaskForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (evento) => {
    evento.preventDefault();
    createTask(title, description);
    setTitle('');
    setDescription('');
  };

  return (
    <div className="max-w-md mx-auto mb-4">
      <form className="bg-slate-800 p-10 text-center rounded-xl" onSubmit={handleSubmit}>
        <h1 className="text-2xl font-bold text-white text-center mb-3">Crea tu tarea</h1>
        <input
          type="text"
          className="bg-slate-300 p-3 w-full mb-2"
          placeholder="Escribe tu tarea"
          value={title}
          onChange={(evento) => setTitle(evento.target.value)}
          autoFocus
        />
        <br />
        <textarea
          className="bg-slate-300 p-3 w-full mb-2"
          placeholder="Escribe la descripción de la tarea"
          value={description}
          onChange={(evento) => setDescription(evento.target.value)}
        ></textarea>
        <button className="bg-indigo-500 px-3 py-1 text-white">Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
