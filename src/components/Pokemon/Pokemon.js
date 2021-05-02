import './Pokemon.css';
import { capitalize } from '../../utils';
import { useDispatch } from 'react-redux';
import { editPokemon } from '../PokemonsList/PokemonsListSlice';

const Pokemon = ({ name, caught, id }) => {

    const dispatch = useDispatch();

    const clickHandler = () => {
        dispatch(editPokemon({ id: id, caught: !caught }));
    }

    return (
        <div className="card">
            <img src={`${process.env.PUBLIC_URL}/img/${id}.png`} className="card-img-top" alt="" />
            <div className="card-body p-0 d-flex justify-content-center flex-column">
                <h5 className="card-title text-center">{capitalize(name)}</h5>
                <button type="button"
                        className="btn btn-primary btn-sm btn-warning card-button fs-5 fw-bolder"
                        disabled={caught}
                        onClick={clickHandler} >
                    {caught ? 'Caught' : 'Catch'}
                </button>
            </div>
        </div>
    );
};

export default Pokemon;