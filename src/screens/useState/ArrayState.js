import { useState } from 'react'
import './arrayState.css';
import MyHeader from '../../components/MyHeader';
import PersonList from '../../components/PersonList';
import BoxContainer from '../../components/BoxContainer';

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
        <div>
            <MyHeader />
            <div className="App">

                <button className="toggle" onClick={toggleHnndler}>TOGGLE</button>
                {/* <ul>
                    {show && tasks.map(task => (
                        (<li key={task.id} className={task.married ? 'married' : 'unmarried'}>
                            <span>{task.id} : {task.name}</span>
                            <button className='deleteTask' onClick={() => deleteTask(task.id)}>Delete</button>
                        </li>)
                    ))}
                </ul> */}
                <PersonList
                    tasks={tasks}
                    show={show}
                    deleteTask={deleteTask}
                />
            </div>

            <BoxContainer className="success">
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, consectetur! Perferendis, exercitationem laudantium! Nam et dolorem amet illo cum repudiandae veritatis libero, nisi labore aut consectetur dolor. Dicta, blanditiis distinctio.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id in a corrupti, doloribus, reprehenderit ipsam, minima blanditiis sit iste distinctio ea omnis soluta! Obcaecati at voluptates aliquam assumenda dicta odit.</p>
            </BoxContainer>

            <BoxContainer className="warning">
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, consectetur! Perferendis, exercitationem laudantium! Nam et dolorem amet illo cum repudiandae veritatis libero, nisi labore aut consectetur dolor. Dicta, blanditiis distinctio.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id in a corrupti, doloribus, reprehenderit ipsam, minima blanditiis sit iste distinctio ea omnis soluta! Obcaecati at voluptates aliquam assumenda dicta odit.</p>
            </BoxContainer>

            <BoxContainer className="error">
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, consectetur! Perferendis, exercitationem laudantium! Nam et dolorem amet illo cum repudiandae veritatis libero, nisi labore aut consectetur dolor. Dicta, blanditiis distinctio.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id in a corrupti, doloribus, reprehenderit ipsam, minima blanditiis sit iste distinctio ea omnis soluta! Obcaecati at voluptates aliquam assumenda dicta odit.</p>
            </BoxContainer>

            {/* <div className="box success">
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, consectetur! Perferendis, exercitationem laudantium! Nam et dolorem amet illo cum repudiandae veritatis libero, nisi labore aut consectetur dolor. Dicta, blanditiis distinctio.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id in a corrupti, doloribus, reprehenderit ipsam, minima blanditiis sit iste distinctio ea omnis soluta! Obcaecati at voluptates aliquam assumenda dicta odit.</p>
            </div>
            <div className="box warning">
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, consectetur! Perferendis, exercitationem laudantium! Nam et dolorem amet illo cum repudiandae veritatis libero, nisi labore aut consectetur dolor. Dicta, blanditiis distinctio.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id in a corrupti, doloribus, reprehenderit ipsam, minima blanditiis sit iste distinctio ea omnis soluta! Obcaecati at voluptates aliquam assumenda dicta odit.</p>
            </div>
            <div className="box error">
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, consectetur! Perferendis, exercitationem laudantium! Nam et dolorem amet illo cum repudiandae veritatis libero, nisi labore aut consectetur dolor. Dicta, blanditiis distinctio.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id in a corrupti, doloribus, reprehenderit ipsam, minima blanditiis sit iste distinctio ea omnis soluta! Obcaecati at voluptates aliquam assumenda dicta odit.</p>
            </div> */}

        </div>
    )
}

export default ArrayState