import React from 'react';
import TaskItem from './TaskItem';

export default function TaskList({ tasks, onChangeTask, onDeleteTask }) {

    return (
        <section className="list">
            <ul>
                {tasks.map((task) => (
                    <li className="item" key={task.id}>
                        <TaskItem task={task} onChange={onChangeTask} onDelete={onDeleteTask} />
                    </li>
                ))}
            </ul>
        </section>
    );
}
