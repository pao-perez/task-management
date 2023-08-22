import React from 'react';
import './TaskItem.css';

export default function TaskItem({ task, onChange, onDelete }) {
    return (
        <div className="item">
            <input
                type="checkbox"
                checked={task.isCompleted}
                onChange={(e) => {
                    onChange({
                        ...task,
                        isCompleted: e.target.checked,
                    });
                }}
            />
            {task.name}
            <span>{task.isCompleted ? "Completed" : "Not Completed"}</span>
            <button onClick={() => onDelete(task.id)}>Delete</button>
        </div>
    );
}
