import Navbar from "../../components/navbar";
import FeaturedPost from "../../components/featured-post";
import Posts from "../../components/posts";
import "./styles.css"
import ListaTroca from "../../components/lista-troca";




export default function Home(){
    return (
        <div className="div-home">
           
           <FeaturedPost />
            <ListaTroca />
           <Posts/>
           
           
        </div>

    );
    
}