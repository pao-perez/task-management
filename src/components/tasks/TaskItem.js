import React from 'react';

export default function TaskItem({ task, onChange, onDelete }) {
    return (
        <>
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
            <button onClick={() => onDelete(task.id)}>Delete</button>
        </>
    );
}
