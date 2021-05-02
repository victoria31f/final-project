import './PokemonsList.css';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPokemons, selectAllPokemons } from './PokemonsListSlice';

import Pokemon from '../Pokemon';
import Spinner from '../Spinner';

const PokemonsList = () => {

    const dispatch = useDispatch();
    const pokemonsList = useSelector(selectAllPokemons);
    const pokemonsListStatus = useSelector(state => state.pokemonsList.status);
    const pokemonsListError = useSelector(state => state.pokemonsList.error);

    useEffect(() => {
        if(pokemonsListStatus === 'idle') {
            dispatch(fetchPokemons());
        }
    }, [pokemonsListStatus, dispatch]);

    let content;
    if(pokemonsListStatus === 'loading') {
        content = <Spinner />;
    } else if(pokemonsListStatus === 'succeeded') {
        const elements = pokemonsList.map((item, idx) => {
            return <Pokemon name={item.name}
                            caught={item.caught ? item.caught : false}
                            id={item.id}
                            key={idx} />;
        });
        content = <div className="list mx-5 py-4">{ elements }</div>;
    } else if(pokemonsListStatus === 'failed') {
        content = <div>{pokemonsListError}</div>;
    }

    return (
        <div>
            { content }
        </div>
    );
};

export default PokemonsList;