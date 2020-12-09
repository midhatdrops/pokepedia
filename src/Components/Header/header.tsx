import React from 'react';
import '../../Assets/Styles/header.css';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <img src={'../../Assets/Images/pokemon-logo.ico'} alt="Logo Pokemon" />
        <a className="navbar-brand" href="/">
          Pokepedia
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Início
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Próxima
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Anterior
              </a>
            </li>
          </ul>
        </div>
        <form className="d-flex">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Tipo"
            aria-label="Search"
            style={{ width: '150px' }}
          />
          <button
            className="btn btn-outline-danger me-3"
            type="submit"
            onClick={(e) => e.preventDefault()}
          >
            Pesquisar
          </button>
        </form>
        <form className="d-flex">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Nome"
            aria-label="Search"
            style={{ width: '150px' }}
          />
          <button
            className="btn btn-outline-secondary"
            type="submit"
            onClick={(e) => e.preventDefault()}
          >
            Pesquisar
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Header;
