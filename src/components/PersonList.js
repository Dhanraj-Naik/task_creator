import React from 'react'

const PersonList = ({ tasks, show, deleteTask }) => {
    if (tasks == null) return null;
    return (
        <ul>
            {show && tasks.map(task => (
                (<li key={task.id} className={task.married ? 'married' : 'unmarried'}>
                    <span>{task.id} : {task.name}</span>
                    <button className='deleteTask' onClick={() => deleteTask(task.id)}>Delete</button>
                </li>)
            ))}
        </ul>
    )
};

export default PersonList