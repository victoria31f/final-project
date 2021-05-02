import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { apiService } from '../../services/Api';

const initialState = {
    pokemons: [],
    status: 'idle',
    error: null,
};

export const fetchPokemons = createAsyncThunk(
    'pokemonsList/fetchPokemons',
    () => apiService.getAllPokemons(15)
);

export const editPokemon = createAsyncThunk(
    'pokemonsList/editPokemon',
    (data) => apiService.editPokemon(data)
);

export const pokemonsListSlice = createSlice({
    name: 'pokemonsList',
    initialState,
    reducers: {
        pokemonsAdded: (state, action) => {
            state.pokemons.concat(action.payload);
        },
    },
    extraReducers: {
        [fetchPokemons.pending]: (state) => {
            state.status = 'loading';
        },
        [fetchPokemons.fulfilled]: (state, action) => {
            state.status = 'succeeded';
            state.pokemons = state.pokemons.concat(action.payload);
        },
        [fetchPokemons.rejected]: (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        },
        [editPokemon.fulfilled]: (state, action) => {
            const { id, name, caught } = action.payload;
            const pokemon = state.pokemons.find(el => el.id === id);
            if(pokemon) {
                pokemon.name = name;
                pokemon.caught = caught;
            }
        },
    }
});

export default pokemonsListSlice.reducer;

export const selectAllPokemons = state => state.pokemonsList.pokemons;