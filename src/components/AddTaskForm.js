

const AddTaskForm = () => {
    return (
        <section className="addtask">
            <form
            >
                <label htmlFor="task">Person Name: </label>
                <input type="text" name="task" id="task" placeholder="Person Name" />
                <button type="submit">Add Person</button>
            </form>
        </section>
    )
}

export default AddTaskForm