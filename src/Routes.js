import React from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom"
import Home from "./Home";
import ViewPokemon from "./ViewPokemons";
import PokemonDetails from "./PokemonDetails";

const Routes = () =>{
    return (<BrowserRouter>
        <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/viewPokemon" exact component={ViewPokemon}/>
        <Route path="/pokemonDetails" exact component={PokemonDetails}/>
        </Switch>
    </BrowserRouter>)
}


export default Routes

