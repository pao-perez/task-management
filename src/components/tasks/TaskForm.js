import { useState } from 'react';

export default function TaskForm({ onAddTask }) {
    const [name, setName] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        setName('');
        onAddTask(name);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Add task"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button type="submit">
                Add
            </button>
        </form>
    );
}