import React from "react";
import Header from "./Header";
import history from "./History";
import "./styles.css"

const Home = ()=>{

return (
    <div className="home">
        <Header/>
        <div className="container">
        <h3 className="gotta">
        Gotta catch 'em all
        </h3>
        <button className="buttons" onClick={()=>history.push("./viewPokemon")}>View Pokemon details</button>
        <button className="buttons">Compare pokemons</button>
        </div>
    </div>
)

}


export default Home;