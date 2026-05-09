import { useState } from "react"
import { useEffect } from "react"
import { getTask } from "../api/tasks"
import Taskcard from "./Taskcard"
import "./TaskList.css"
import TaskModal from "./AddTaskModal"
function TaskList(){
    const [tasks, setTasks] = useState([])
    const [showModal, setShowModal] = useState(false)
    const fetchTasks = async () => {
        const data = await getTask()
        if (Array.isArray(data)) {
            setTasks(data)  
        }
    }
    useEffect(() => {
        fetchTasks()
}, [])
    return(
        <div className="task-container">
            <div className="add-btn">
                <button type="button" onClick={() => setShowModal(true)}>Add Task</button>
            </div>
            <div className="tasklist">
                {tasks.map(task => (
                    <Taskcard key={task.taskID} task={task} onRefresh={fetchTasks}/>
                ))}
            </div>
            {showModal && <TaskModal onClose={() => setShowModal(false)} onTaskAdded={fetchTasks}/>}
                
        </div>
    )
}

export default TaskList