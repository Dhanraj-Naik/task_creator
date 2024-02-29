import { useState } from 'react'
import './arrayState.css';
import MyHeader from '../../components/MyHeader';
import PersonList from '../../components/PersonList';
import BoxContainer from '../../components/BoxContainer';
import { Footer } from '../../components/Footer';

const ArrayState = () => {
    const [tasks, setTask] = useState([{ id: 1, name: 'Dhanraj', married: true }, { id: 2, name: 'Vipul', married: false }, { id: 3, name: 'Yogesh', married: true }]);
    const [show, setShow] = useState(false);
    const myStyle = { color: 'white', padding: '5px 10px'};

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
                <button style={myStyle} className="toggle" onClick={toggleHnndler}>TOGGLE</button>
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
            <Footer />

        </div>
    )
}

export default ArrayState