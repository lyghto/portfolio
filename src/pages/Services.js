import React from "react";
import Footer from "../components/Footer";
import service from "../components/service.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <>
      <section className="text-center">
        <img src="/img/banner.jpg" alt="Services" className="img-fluid" />
      </section>

      <div className="container my-5">
        <h2 className="text-center mb-3">Mon offre de services</h2>
        <p className="text-center text-muted mb-4 ">
          Voici les prestations sur lesquelles je peux intervenir
        </p>

        <div className="line mb-4"></div>

        <div className="row text-center">
          <div className="col-md-4 mb-4">
            <div className="border p-4 h-100 card-hover my-card">
              <i className="bi bi-pencil fs-1 text-primary mb-3"></i>
              <h5>UX Design</h5>
              <p>
                L’UX Design est une discipline qui consiste à concevoir des
                produits (sites web, applications mobiles...) en plaçant
                l’utilisateur au centre des préoccupations.
              </p>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="border p-4 h-100 card-hover">
              <i className="bi bi-code-slash fs-1 text-primary mb-3"></i>
              <h5>Développement web</h5>
              <p>
                Création de sites internet en HTML, CSS, JavaScript, PHP... avec
                frameworks modernes (React, Bootstrap, etc.).
              </p>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="border p-4 h-100 card-hover">
              <i className="bi bi-search fs-1 text-primary mb-3"></i>
              <h5>Référencement</h5>
              <p>
                Optimisation SEO pour faire remonter votre site dans Google et
                attirer un public qualifié.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Services;
