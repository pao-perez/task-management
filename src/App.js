import React, { useEffect, useState } from 'react';
import './App.css';
import TaskForm from './components/tasks/TaskForm';
import TaskList from './components/tasks/TaskList';

export default function App() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
      const controller = new AbortController();

      (async () => {
        const signal = controller.signal;
        const response = await fetch('http://localhost:3004/tasks', {
          signal: signal
        });
        const data = await response.json();
        setTasks(data)
      })();

      return () => {
        controller.abort();
      };
    }, []);

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