import "./Hero.css"
import { Link } from "react-router-dom"
function Hero(){
    return <div className="hero">
        <div className="info">
            <h2>MASTER YOUR DAY</h2>
            <p>
                Task management REST API built with FastAPI and SQLModel.
            </p>
        </div>
        <div className="CTA">
            <Link to="/register">Get Started</Link>
        </div>
    </div>
}
export default Hero
