import React, { useState } from 'react';
import './App.css';
import TaskForm from './components/tasks/TaskForm';
import TaskList from './components/tasks/TaskList';

const initialTasks = [
  { id: 'bd175c9e-2909-4ad3-b256-f3d299a5534a', name: 'Do laundry', isCompleted: true },
  { id: '62a85831-7d03-45e3-89ac-ccc56d5d5d7b', name: 'Buy groceries', isCompleted: false },
  { id: 'c4b58f66-0252-437d-b8ce-9e659552cc8d', name: 'Cook dinner', isCompleted: false },
];

export default function App() {
  const [tasks, setTasks] = useState(initialTasks);

  function handleAddTask(name) {
    setTasks([
      ...tasks,
      {
        id: crypto.randomUUID(),
        name: name,
        isCompleted: false,
      },
    ]);
  }
  
  function handleChangeTask(task) {
    setTasks(tasks.map((t) => t.id === task.id ? task : t));
  }
  
  function handleDeleteTask(taskId) {
    setTasks(tasks.filter((t) => t.id !== taskId));
  }

  return (
    <section className="container">
      <TaskForm onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </section>
  );
}