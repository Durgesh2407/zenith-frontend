import "./LoginForm.css"
import { Link } from "react-router-dom"
import { useState } from "react"
import { loginuser } from "../api/auth"
import { useNavigate } from "react-router-dom";
function LoginForm(){
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const [error, setError] = useState("")
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = await loginuser(email, pass)
        if(data.message == "Enter correct password"){
            setError("Enter correct password")
        }
        else if (data && typeof data === "string") {
            localStorage.setItem("token", data)
            navigate("/dashboard")
        }
        else if (data.error) {
            setError(data.error)
}
    }
    return (
    <div className="loginform">
        <form onSubmit={handleSubmit}>
            <div className="email">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required placeholder="johndoe@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="pass">
                <label htmlFor="pass">Password</label>
                <input type="password" id="pass" name="pass" required
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                />
            </div>
                <div className="btns">
                <div className="submit">
                    <button type="submit" >Login</button>
                </div>
                <div className="reg">
                    <Link to="/register">Register</Link>
                </div>
            </div>
        </form>
        {error && <p>{error}</p>}
    </div>
    )
}
export default LoginForm