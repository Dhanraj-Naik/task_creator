import React from 'react'

function Person({ task, deleteTask }) {
    return (
        <li
            // key={task.id} 
            className={task.married ? 'married' : 'unmarried'}>
            <span>{task.id} : {task.name}</span>
            <button className='deleteTask' onClick={() => deleteTask(task.id)}>Delete</button>
        </li>)
}

export default Person