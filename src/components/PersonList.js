import React from 'react'
import Person from './Person';

const PersonList = ({ tasks, show, deleteTask }) => {
    if (tasks == null) return null;
    return (
        <ul>
            {show && tasks.map(task =>
            (
                <Person key={task.id} task={task} deleteTask={deleteTask} />
            ))}
        </ul>
    )
};

export default PersonList