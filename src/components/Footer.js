import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-5 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4">
            <h5>John Doe</h5>
            <p>
              40 rue Laure Diebold
              <br />
              69009 Lyon, France
              <br />
              10 20 30 40 50
              <br />
              john.doe@gmail.com
            </p>
            <div className="d-flex gap-3">
              <a href="#">
                <i className="bi bi-github text-light"></i>
              </a>
              <a href="#">
                <i className="bi bi-twitter text-light"></i>
              </a>
              <a href="#">
                <i className="bi bi-linkedin text-light"></i>
              </a>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <h5>Liens utiles</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="text-light text-decoration-none">
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-light text-decoration-none"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  className="text-light text-decoration-none"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to="me-contacter"
                  className="text-light text-decoration-none"
                >
                  Me contacter
                </Link>
              </li>
              <li>
                <Link
                  to="mentions-légales"
                  className="text-light text-decoration-none"
                >
                  Mentions-légales
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-md-4 mb-4">
            <h5>Mes dernières réalisations</h5>
            <ul className="list-unstyled">
              <li>Fresh Food</li>
              <li>Restaurant Akira</li>
              <li>Espace bien-être</li>
              <li>SEO</li>
              <li>Création d’une API</li>
              <li>Maquette d’un site</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
