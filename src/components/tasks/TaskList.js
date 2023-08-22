import React from 'react';
import TaskItem from './TaskItem';
import './TaskList.css';

export default function TaskList({ tasks, onChangeTask, onDeleteTask }) {

    return (
        <section className="list">
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        <TaskItem task={task} onChange={onChangeTask} onDelete={onDeleteTask} />
                    </li>
                ))}
            </ul>
        </section>
    );
}
