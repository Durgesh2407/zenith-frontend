import { Link } from "react-router-dom"
import "./RegisterForm.css"
import { registerUser } from "../api/auth"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
function RegisterForm(){
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const [error, setError] = useState("")
    const navigate= useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = await registerUser(name, email, pass)
        if(data && data.message == "data entered successfully"){
            // localStorage.setItem("token", data)
            navigate("/dashboard")
        }
        else{
            setError("User already exists")       
        }
    }
    return(
        <div className="registerform">
            <form onSubmit={handleSubmit}>
                <div className="name">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" required placeholder="Kallu Kaliya"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="remail">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required placeholder="KalluKK@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="rpass">
                    <label htmlFor="pass">Password</label>
                    <input type="password" id="pass" name="pass" required 
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                />
                </div>
                <div className="buttons">
                    <button type="submit">Sign up</button>
                </div>
                <div className="reg">
                    <Link to="/login">Already have an account? Login</Link>
                </div>
            </form>
            {error && <p>{error}</p>}
        </div>
    )
}
export default RegisterForm