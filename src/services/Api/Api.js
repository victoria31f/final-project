class Api {
    _baseUrl = 'http://localhost:3001';

    getResource = async (url, options) => {
        const res = await fetch(`${this._baseUrl}${url}`, options);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`);
        }
        return await res.json();
    };

    getAllPokemons = async (limit) => {
        return await this.getResource(`/pokemons?_limit=${limit}`);
    };

    getPokemon = async (id) => {
        return await this.getResource(`/pokemons/${id}`);
    };

    editPokemon = async (data) => {
        const { id, ...info } = data;
        return await this.getResource(`/pokemons/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(info),
        });
    };
}

export const apiService = new Api();