import { useState } from "react";
import "./AddTaskModal.css"
import { createTask } from "../api/tasks";
function TaskModal({ onClose, onTaskAdded }) {
    const [formData, setFormData] = useState({
        taskName: "",
        taskDesc: "",
        taskStart: "",
        taskEnd: ""
    });
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.taskName || !formData.taskStart || !formData.taskEnd) {
            alert("Please fill all required fields");
            return;
        }
        createTask(
            formData.taskName,
            formData.taskDesc,
            formData.taskStart,
            formData.taskEnd
        )
        onClose()
        onTaskAdded()
    };

    return (
        <div className="modal-overlay">
            <div className="modal">
                <h2>Add Task</h2>

                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="taskName"
                        placeholder="Task Name *"
                        value={formData.taskName}
                        onChange={handleChange}
                        required
                    />

                    <textarea
                        name="taskDesc"
                        placeholder="Task Description"
                        value={formData.taskDesc}
                        onChange={handleChange}
                    />

                    <input
                        type="datetime-local"
                        name="taskStart"
                        value={formData.taskStart}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="datetime-local"
                        name="taskEnd"
                        value={formData.taskEnd}
                        onChange={handleChange}
                        required
                    />

                    <button type="submit">Submit</button>
                    <button onClick={onClose}>Cancel</button>
                </form>
            </div>
        </div>
    );
}

export default TaskModal;