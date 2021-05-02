import './App.css';
import {
    Switch,
    Route,
} from "react-router-dom";

import Menu from "../Menu";
import PokemonsList from '../PokemonsList';
import React from 'react';

const App = () => {

    return (
        <div className="bg-light vh-100">
            <Menu />
            <div className="container-lg bg-light p-0 content">
                <Switch>
                    <Route exact path='/'>
                        <PokemonsList />
                    </Route>
                    <Route exact path='/pokemons/:name'>
                        <PokemonsList />
                    </Route>
                    <Route exact path='/pokemons-caught'>
                        <PokemonsList />
                    </Route>
                </Switch>
            </div>
        </div>
    );
};

export default App;