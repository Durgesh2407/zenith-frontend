import "./Hero.css"
import { Link } from "react-router-dom"
function Hero(){
    return <div className="hero">
        <div className="info">
            <h2>MASTER YOUR DAY</h2>
            <p>
                Zenith is a minimal task manager with secure authentication.
            </p>
        </div>
        <div className="CTA">
            <Link to="/register">Get Started</Link>
        </div>
    </div>
}
export default Hero
