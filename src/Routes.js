import React from "react";
import {Router, Switch, Route} from "react-router-dom"
import Home from "./Home";
import ViewPokemon from "./ViewPokemons";
import history from "./History";

const Routes = () =>{
    return (<Router history={history}>
        <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/viewPokemon" exact component={ViewPokemon}/>
        </Switch>
    </Router>)
}


export default Routes

