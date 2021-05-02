import './PokemonPage.css';
import { useEffect, useState } from 'react';
import { apiService } from '../../services/Api';

const PokemonPage = ({ match }) => {
    const { id } = match.params;
    const [pokemon, setPokemon] = useState({
        id: '',
        name: '',
        caught: '',
    });

    useEffect(() => {
        apiService.getPokemon(id)
            .then(data => {
                setPokemon(data);
            })
            .catch(err => {
                console.error(err);
            });
    });

    return (
        <div className="card mb-3 pokemon-card">
            <div className="row g-0">
                <div className="col-md-6">
                    <img src={`${process.env.PUBLIC_URL}/img/${id}.png`} alt={pokemon.name} className="pokemon-img" />
                </div>
                <div className="col-md-6">
                    <div className="card-body text-end">
                        <h5 className="card-title fs-2">{`${pokemon.id} - ${pokemon.name.toUpperCase()}`}</h5>
                        <p className="card-text fs-3">{pokemon.caught ? 'This pokemon is caught' : 'This pokemon' +
                            ' is not' +
                            ' yet caught'}</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PokemonPage;