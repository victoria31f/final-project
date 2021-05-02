import './App.css';
import {
    Switch,
    Route,
} from "react-router-dom";

import Menu from "../Menu";
import PokemonsList from '../PokemonsList';
import React from 'react';
import PokemonPage from '../PokemonPage/PokemonPage';

const App = () => {

    return (
        <div className="bg-light vh-100">
            <Menu />
            <div className="container-lg bg-light p-0 content">
                <Switch>
                    <Route exact path='/' component={PokemonsList} />
                    <Route path='/pokemons/:id' component={PokemonPage} />
                    <Route path='/pokemons-caught' component={PokemonsList}/>
                </Switch>
            </div>
        </div>
    );
};

export default App;