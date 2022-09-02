import "./styles.css";
import { Link } from "react-router-dom";


export default function Navbar(){
    return (
        <nav className="navbar">
            <div className="logo">
                <img src="../../recycle-image.png" alt="Logo"/>
                <h1><span>RECICLA</span>AÊ</h1>
            </div>
            
            <ul className="links">
                <li class = "initial">Inicial</li>
                <li>|</li>
                <li>Mapa</li>
                <li>|</li>
                <li>Trocas</li>
                <li>|</li>
                <li>Sobre</li>
                <li><img class = "search-icon" src="../../search.png" alt="search icon" /></li>
            </ul>

            
        </nav>
    )
    
}