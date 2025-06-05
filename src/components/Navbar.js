import React from 'react';

const Navbar = () => {
    return (
      <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Jhon Doe
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
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#service">
                Service
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#portefolio">
                Portefolio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
  
            <li className="nav-item">
              <a className="nav-link" href="#mention-légales">
                Mention Légale
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    )
  };
  export default Navbar;