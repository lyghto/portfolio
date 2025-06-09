import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

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
            <div className="d-flex gap-3 footer-icon">
              <a
                href="https://github.com/github-john-doe"
                targer="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-github  fs-1 footer-icon"></i>
              </a>
              <a
                href="https://twitter.com/john_doe"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-twitter fs-1 footer-icon"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/john-doe/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-linkedin fs-1 footer-icon"></i>
              </a>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <h5>Liens utiles</h5>
            <ul className="list-unstyled">
              <li>
                <Link
                  to="/"
                  className=" nav-link text-light text-decoration-none "
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-light nav-link">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-light nav-link">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-light nav-link">
                  Me contacter
                </Link>
              </li>
              <li>
                <Link to="/mentions" className="text-light nav-link">
                  Mentions Légales
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-md-4 mb-4">
            <h5>Mes dernières réalisations</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/portfolio" className="footer-link">
                  {" "}
                  Fresh Food{" "}
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="footer-link">
                  {" "}
                  Restaurant Akira{" "}
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="footer-link">
                  {" "}
                  Espace bien-être{" "}
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="footer-link">
                  {" "}
                  SEO{" "}
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="footer-link">
                  {" "}
                  Création d'un API{" "}
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="footer-link">
                  {" "}
                  Maquette d'un site{" "}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
