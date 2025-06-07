import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../components/hero.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero-section d-flex align-items-center justify-content-center text-center text-light">
      <div>
        <h1 className="display-4 fw-bold">Bonjour, je suis John Doe</h1>
        <h2 className="mb-4">Développeur web full stack</h2>
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

const GithubModal = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users/github-john-doe")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  return (
    <div
      className="modal fade"
      id="githubModal"
      tabIndex="-1"
      aria-labelledby="githubModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content bg-dark text-light">
          <div className="modal-header border-secondary">
            <h5 className="modal-title" id="githubModalLabel">
              Mon profil GitHub
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="modal"
              aria-label="Fermer"
            ></button>
          </div>

          <div className="modal-body">
            {user && (
              <div className="row">
                <div className="col-md-6 d-flex align-items-center justify-content-center bg-dark">
                  <img
                    src={user.avatar_url}
                    alt="avatar"
                    style={{
                      width: "100%",
                      maxWidth: "280px",
                      height: "auto",
                      objectFit: "cover",
                    }}
                  />
                </div>

                <div className="col-md-6 p-3">
                  <p className="d-flex align-items-center mb-2">
                    <a
                      href={user.html_url}
                      className="text-info text-decoration-none"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="bi bi-person me-2"></i>
                      {user.name || user.login}
                    </a>
                  </p>

                  <hr className="border-secondary my-1" />

                  <i className="bi bi-geo-alt"></i>

                  <hr className="border-secondary my-1" />

                  {user.bio && (
                    <p>
                      <i className="bi bi-chat-left-text me-2"></i>
                      {user.bio}
                    </p>
                  )}

                  <hr className="border-secondary my-1" />

                  <ul className="list-unstyled">
                    <li>
                      <i className="bi bi-box me-2"></i>Repositories :{" "}
                      {user.public_repos}
                    </li>

                    <hr className="border-secondary my-1" />

                    <li>
                      <i className="bi bi-people me-2"></i>Followers :{" "}
                      {user.followers}
                    </li>

                    <hr className="border-secondary my-1" />

                    <li>
                      <i className="bi bi-person-plus me-2"></i>Following :{" "}
                      {user.following}
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          <div className="modal-footer border-secondary">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Fermer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-6">
          <h3 className="section-title">À propos</h3>
          <img
            src="/img/john-doe-about.jpg"
            alt="Développeur"
            className="img-fluid mb-3"
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Optio,
            necessitatibus consectetur tempore perferendis nostrum, ex delectus
            reiciendis impedit aut iure enim placeat? Natus, neque at?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Optio,
            necessitatibus consectetur tempore perferendis nostrum, ex delectus
            reiciendis impedit aut iure enim placeat? Natus, neque at?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Optio,
            necessitatibus consectetur tempore perferendis nostrum, ex delectus
            reiciendis impedit aut iure enim placeat? Natus, neque at?
          </p>
        </div>

        <div className="col-md-6">
          <h3 className="section-title">Mes compétences</h3>
          {[
            { skill: "HTML5", value: 90, color: "danger" },
            { skill: "CSS3", value: 80, color: "info" },
            { skill: "JavaScript", value: 70, color: "warning" },
            { skill: "PHP", value: 60, color: "success" },
            { skill: "React", value: 50, color: "primary" },
          ].map((item) => (
            <div className="mb-3" key={item.skill}>
              <span>
                {item.skill} {item.value}%
              </span>
              <div className="progress">
                <div
                  className={`progress-bar bg-${item.color}`}
                  role="progressbar"
                  style={{ width: `${item.value}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

Home = () => {
  return (
    <>
      <Hero />
      <GithubModal />
      <About />
      <Footer />
    </>
  );
};
export default Home;
