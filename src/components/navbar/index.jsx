import "./styles.css";
import { Link } from "react-router-dom";


export default function Navbar(){
    return (
        <nav className="navbar">
            <div>
                <img className="logo" src="https://recycle.eco.br/wp-content/uploads/2021/05/Logo-Recycle-transp.png"/>
            </div>
            
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/about">Sobre</Link>
                <Link to="/contact">Fale conosco</Link>
            </div>
        </nav>
    )
    
}