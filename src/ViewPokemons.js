import React, {useState,useEffect} from "react";
import Header from "./Header";
import {getPokemons} from "./api";
import { Link } from "react-router-dom";

const ViewPokemon = (data)=>{
    const [pokemon , setPokemon] = useState([]);
    const [search ,setSearch] = useState("");
    const [selectedPokemon, setSelectedPokemon] = useState(null);

    useEffect(()=>{
        getPokemons().then((data)=>{
            if(data.error){
                console.log(data.error);
            } else{
                setPokemon(data.results);
            }

        })
    },[]);

    const handlePokemonSearch = (event)=>{
        event.preventDefault();
        setSearch(event.target.value);
        
    }

    const similarPoke = (poke)=>{
        return pokemon.filter((pokem)=>{
          if(pokem.name.substring(0,poke.length)===poke){
              return pokem;
          }
          return null;
        })
    }

    const handleOptionClick = (event)=>{
        setSearch("");
        document.getElementById("search").value = event.target.value;
        let poke = pokemon.filter((data)=>{
            if(data.name === event.target.value){
                return data;
            }
            return null;
        });
        setSelectedPokemon(poke)
    }

    const Suggestions = (pokemo) => {
        const options = pokemo.map((r, index) => (
            <div key ={index}>
                <option className="options" value={r.name} onClick={handleOptionClick}>
                {r.name}
                </option>
                <hr className="line"/>
            </div>
        ))
        return options;
      }

return(
    <div>
        <Header/>
        <div className="container-hori">
            <div>
                <h6 className="gotta">
                Select your pokemon
                </h6>
            </div>
            <div className="search-container">
                <input id="search" className="search" type="text" onChange={handlePokemonSearch}></input> 
                {search.length>0 && Suggestions(similarPoke(search))}
            </div>
        </div>
        <div className="container">
        <Link to={{
            pathname:"/pokemonDetails",
            data:selectedPokemon
        }} className="link"><button className="buttons">View Pokemon Details</button></Link>
        <Link to={{
            pathname:"/comparePokemons",
            data:selectedPokemon}} className="link" >Compare Pokemons</Link>
        </div>
    </div>
)

}


export default ViewPokemon;