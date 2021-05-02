import './App.css';
import Menu from "../Menu";
import PokemonsList from '../PokemonsList';
import React from 'react';

const App = () => {

    return (
        <div className="bg-light vh-100">
            <Menu />
            <div className="container-lg bg-light p-0 content">
                <PokemonsList />
            </div>
        </div>
    );
};

export default App;