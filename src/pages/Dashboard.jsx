import Topbar from "../components/Topbar"
import TaskList from "../components/TaskList"
import "./Dashboard.css"
function Dashboard() {
    return(
        <div className="dashboard">
            <Topbar></Topbar>
            <div className="content">
                <TaskList></TaskList>
            </div>
        </div>
    )
}
export default Dashboard