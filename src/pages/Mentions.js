import React from "react";
import { Link } from "react-router-dom";
import { Accordion, Container } from "react-bootstrap";
import Footer from "../components/Footer";
import mentions from "../components/mentions.css";

const Mentions = () => {
  return (
    <>
      <Container className="my-5">
        <h2 className="text-center fw-bold">Mentions légales</h2>
        <div className="line"></div>

        <Accordion defaultActiveKey="0" alwaysOpen>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Éditeur du site</Accordion.Header>
            <Accordion.Body>
              <p>
                <strong>John Doe</strong>
              </p>
              <p>
                <i className="bi bi-map me-2"></i> 40 rue Laure Diebold
                <br />
                <i className="bi bi-geo-alt me-2"></i>69009 Lyon, France
                <br />
                <i className="bi bi-phone me-1"></i> 10 20 30 40 50
                <br />
                <i className="bi bi-envelope-at me-2"></i>john.doe@gmail.com
              </p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>Hébergeur</Accordion.Header>
            <Accordion.Body>
              <p>
                <strong>alwaysdata</strong>
              </p>
              <p>
                91 Rue du Faubourg Saint-Honoré, 75008 Paris
                <br />
                <i className="bi bi-globe"></i>{" "}
                <a
                  href="https://www.alwaysdata.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  www.alwaysdata.com
                </a>
              </p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>Crédits</Accordion.Header>
            <Accordion.Body>
              <p>
                <strong>Crédits</strong>
              </p>
              <p>
                Ce site a été réalisé par John Doe, étudiant au{" "}
                <a
                  href="https://www.centre-europeen-formation.fr/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Centre Européen de formation
                </a>
              </p>
              <p>
                Les images utilisées sur ce site sont libres de droits et ont
                été obtenues sur le site{" "}
                <a
                  href="https://pixabay.com/fr/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Pixabay
                </a>
                .
              </p>
              <p>
                Le favicon de ce site a été fourni par{" "}
                <a
                  href="https://www.flaticon.com/free-icon/john-doe_123456"
                  target="_blank"
                  rel="noreferrer"
                >
                  John Doe Icons ersleft von Freepik - Flaticon
                </a>
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>

      <Footer />
    </>
  );
};

export default Mentions;
