import React from "react";
import Header from "./Header";
import "./styles.css"
import { Link } from "react-router-dom";

const Home = ()=>{

return (
    <div className="home">
        <Header/>
        <div className="container">
        <h3 className="gotta">
        Gotta catch 'em all
        </h3>
        <Link to={{
            pathname: "/viewPokemon",
            data:"hello"
            }} className="link"><button className="buttons">View Pokemon details</button></Link>
        <button className="buttons">Compare pokemons</button>
        </div>
    </div>
)

}


export default Home;