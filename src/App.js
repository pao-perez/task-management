import React, { useEffect, useState } from 'react';
import './App.css';
import Error from './components/Error';
import TaskForm from './components/tasks/TaskForm';
import TaskList from './components/tasks/TaskList';
import { useFetch } from './hooks/useFetch';

export default function App() {
    const [data, errors] = useFetch('http://localhost:3004/tasks');
    const [tasks, setTasks] = useState([]);
    
    useEffect(() => {
      setTasks(data)
    }, [data]);

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

    if (errors.length > 0) {
      return <Error />
    }
  
    return (
      <section className="container">
        <h1>Task Management App</h1>
        <TaskForm onAddTask={handleAddTask} />
        <TaskList
          tasks={tasks}
          onChangeTask={handleChangeTask}
          onDeleteTask={handleDeleteTask}
        />
      </section>
    );
}