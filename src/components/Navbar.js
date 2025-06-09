import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

<Link to="/" className="nav-link">
  Home
</Link>;

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <Link className="navbar-brand logo-text" to="/">
          JOHN <span>DOE</span>
        </Link>
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
              <Link
                className="nav-link activ-link text-uppercase "
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link  text-uppercase" to="/services">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link  text-uppercase" to="/portfolio">
                Portefolio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link  text-uppercase" to="/contact">
                Contact
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link  text-uppercase" to="/mentions">
                Mention Légale
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
