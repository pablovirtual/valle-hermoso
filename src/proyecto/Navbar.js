import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" href="#">
            Menu
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/Inicio">
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Pago">
                  Pago
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Cuenta">
                  Cuenta
                </Link>
                
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/Contacto"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Contactanos
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/Direccion">
                      Direccion
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/Email">
                      email
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/Facebook">
                      facebook
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
