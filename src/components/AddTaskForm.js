import { useState, useRef } from "react"


const AddTaskForm = ({addNewTask}) => {

    const [user, setUser] = useState("")
    const [married, setMarried] = useState(false)
    const myRef = useRef()

    const handleChange = (event) => {
        setUser(event.target.value)
    }
    const handleReset = () => {
        setUser("")
        setMarried(false)
    }

    const handleSelectChange = (event) => {
        setMarried(Boolean(event.target.value))
    }

    const validateData = (event) => {
        event.preventDefault()
       
        const personObject = {
            id: Math.floor(Math.random() * 10000),
            name: user,
            married
        }
        console.log("hello ", personObject)
        addNewTask(personObject)
        handleReset()

    }


    return (
        <section className="addtask">
            <form
                onSubmit={validateData}
            >
                <label htmlFor="task">Person Name: </label>
                <input
                    type="text"
                    name="task"
                    id="task"
                    placeholder="Person Name"
                    autoComplete="off"
                    onChange={handleChange}
                    value={user}
                    
                />
                <select onChange={handleSelectChange} value={married} ref={myRef}>
                    <option value={false}>UnMarried</option>
                    <option value={true}>Married</option>
                </select>
                <button type="submit">Add Person</button>
                <div>
                    <span onClick={handleReset} className="resetField">Reset</span>
                    <span onClick={() => myRef.current.focus()} className="drop">Force Drop</span>
                    <p>{user}</p>
                </div>
            </form>
        </section>
    )
}

export default AddTaskForm