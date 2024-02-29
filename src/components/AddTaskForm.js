import { useState } from "react"


const AddTaskForm = () => {

    const [user, setUser] = useState("")

    const handleChange = (event) => {
        setUser(event.target.value)
    }
    const handleReset = () => {
        setUser("")
    }


    return (
        <section className="addtask">
            <form
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
                <button type="submit">Add Person</button>
                <div>
                    <span onClick={handleReset} className="resetField">Reset</span>
                    <p>{user}</p>
                </div>
            </form>
        </section>
    )
}

export default AddTaskForm