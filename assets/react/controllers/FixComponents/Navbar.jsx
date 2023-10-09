// assets/js/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">
        Projet
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
      </li>
      <li className="nav-item">
            <a className="nav-link" href="#">
              Accueil
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="categoriesDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Catégories
            </a>
            <div className="dropdown-menu" aria-labelledby="categoriesDropdown">
              <a className="dropdown-item" href="#">
                Option 1
              </a>
              <a className="dropdown-item" href="#">
                Option 2
              </a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Inscription
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Identification
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="adminDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Espace admin
            </a>
            <div className="dropdown-menu" aria-labelledby="adminDropdown">
              <a className="dropdown-item" href="#">
                Option 1
              </a>
              <a className="dropdown-item" href="#">
                Option 2
              </a>
              <a className="dropdown-item" href="#">
                Option 3
              </a>
            </div>
          </li>
        </ul>
        <form className="form-inline ml-auto">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Rechercher"
            aria-label="Rechercher"
          />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
            Rechercher
          </button>
        </form>
      </div>
    </div>
  </nav>
);

export default Navbar;
