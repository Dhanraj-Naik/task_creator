import { useState } from 'react'
import './arrayState.css';

const ArrayState = () => {
    const [tasks, setTask] = useState([{ id: 1, name: 'Dhanraj', married: true }, { id: 2, name: 'Vipul', married: false }, { id: 3, name: 'Yogesh', married: true }]);
    const [show, setShow] = useState(false);
    function deleteTask(id) {
        console.log('deleteTask: ', id)
        setTask(prevTask => (prevTask.filter(task => task.id !== id)))
    }

    function toggleHnndler() {
        setShow(!show)
    }

    return (
        <>
            <div className="App">
                <h1 className="arrayCount">{'LIST'}</h1>
                <button className="toggle" onClick={toggleHnndler}>TOGGLE</button>
                <ul>
                    {show && tasks.map(task => (
                        (<li key={task.id} className={task.married ? 'married' : 'unmarried'}>
                            <span>{task.id} : {task.name}</span>
                            <button className='deleteTask' onClick={() => deleteTask(task.id)}>Delete</button>
                        </li>)
                    ))}
                </ul>
            </div>

        </>
    )
}

export default ArrayState