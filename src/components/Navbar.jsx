import "./Navbar.css"
import { Link } from "react-router-dom"
import logo from "../assets/images/logo.png"
function Navbar() {
    return(
        <div className="nav">
            <div className="title">
                <img src={logo} alt="can not load the picture" className="logo" />
                <h3>Zenith</h3>
            </div>
            <div className="menubar">
                <Link to="/">Home</Link>
                <Link to="/features">Features</Link>
                <Link to="/about">About us</Link>
            </div>
            <div className="auth">
                <Link to= "/login">Login</Link>
                <Link to= "/register">Register</Link>
            </div>
        </div>
    )
}
export default Navbar
