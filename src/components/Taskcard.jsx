import "./Taskcard.css"
import { useState } from "react"
import { deleteTask, updateTask } from "../api/tasks"
function Taskcard({ task, onRefresh }){
    const [showMenu, setShowMenu] = useState(false)
    const handleDelete = async () => {
        await deleteTask(task.taskID)
        onRefresh()
    }
    const handleUpdate= async () =>{
        await updateTask(task.taskID)
        onRefresh()
    }
    return(
        <div className="taskcard">
                <div className="task-id">{task.taskID}.</div>
                <div className="task-content">
                    <h4>{task.taskName}</h4>
                    <p>{task.taskDesc}</p>
            </div>
            <div className="task-time">
                <span>
                    Start: <strong>{task.taskStart}</strong>
                </span>

                <span>
                    End: <strong>{task.taskEnd}</strong>
                </span>
            </div>
           <div className={`task-validity ${task.taskValidity ? "done" : "pending"}`}>
                {task.taskValidity ? "DONE" : "PENDING"}
            </div>
            <div className="three-dot" onClick={() => setShowMenu(!showMenu)}>
                <button type="button">⋮</button>
            </div>
            {showMenu && (
                <div className="dropdown">
                    <button onClick={handleUpdate}>Chnage Status</button>
                    <button onClick={handleDelete}>Delete</button>
                </div>
            )}
        </div>
    )
}

export default Taskcard