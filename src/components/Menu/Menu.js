import './Menu.css';

const Menu = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light menu navbar-dark">
            <div className="container-fluid px-5 menu-content">
                <a className="navbar-brand" href="#">Pokedex</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse flex-grow-0" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">All Pokemons</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Caught Pokemons</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Menu;