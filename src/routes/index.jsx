import {Route, Routes, BrowserRouter} from "react-router-dom"
import Home from "../pages/home"
import Contact from "../pages/contact"
import About from "../pages/about"
import Navbar from "../components/navbar"


export default function AppRoutes(){
    return(
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/"         element={ <Home /> }/>
                <Route path="/about"    element={ <About /> }/>
                <Route path="/contact"  element={ <Contact /> }/>
            </Routes>
        </BrowserRouter>
    )
    
}