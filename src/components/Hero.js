import React from "react";
import "./hero.css";

const Hero = () => {
  return (
    <section className="hero-section d-flex align-items-center justify-content-center text-center text-light">
      <div>
        <h1 className="display-4 fw-bold">Bonjour, je suis John Doe</h1>
        <h3 className="mb-4">Développeur web full stack</h3>
        <button
          className="btn btn-danger"
          data-bs-toggle="modal"
          data-bs-target="#githubModal"
        >
          En savoir plus
        </button>
      </div>
    </section>
  );
};

export default Hero;
