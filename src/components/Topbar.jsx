import { useNavigate } from "react-router-dom"
import logo from "../assets/images/logo.png"
import "./Topbar.css"
function Topbar(){
    const navigate = useNavigate()
    const handleSubmit = () => {
        localStorage.removeItem("token")
        navigate("/login")
    }
    return(
        <div className="topbar">
            <div className="title">
                <img src={logo} alt="can not load the picture" className="logo" />
                <h3>Zenith</h3>
            </div>
            <div className="logout">
                <button onClick={handleSubmit}>Logout</button>
            </div>
        </div>
    )
}
export default Topbar