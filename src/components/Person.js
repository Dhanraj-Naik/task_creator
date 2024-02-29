// import React from 'react'
import styles from './Person.module.css'

function Person({ task, deleteTask }) {
    return (
        <li
            // key={task.id} 
            className={task.married ? 'married' : 'unmarried'}
            >
            <span className={styles.title}>{task.id} : {task.name}</span>
            <button className='deleteTask' onClick={() => deleteTask(task.id)}>Delete</button>
        </li>)
}

export default Person