import React, {useState,useEffect} from "react";
import Header from "./Header";
import {getPokemon} from "./api";

const ViewPokemon = ()=>{

    const [pokemon , setPokemon] = useState([]);
    const [search ,setSearch] = useState("");

    useEffect(()=>{
        getPokemon().then((data)=>{
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
        })
    }

    const Suggestions = (pokemo) => {
        const options = pokemo.map((r, index) => (
            <option key={index} value={r.name}>
            {r.name}
          </option>
        ))
        console.log(options);
        return options;
      }

return(
    <div>
        <Header/>
        <div className="container-hori">
            <h6 className="gotta">
            Select your pokemon
            </h6>
            <div className="search-container">
                <input className="search" type="search" onChange={handlePokemonSearch}></input> 
                {search.length>0 && Suggestions(similarPoke(search))}
            </div>
        </div>
    </div>
)

}


export default ViewPokemon;