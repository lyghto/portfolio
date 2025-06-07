import React from "react";
import Footer from "../components/Footer";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import portfolio from "../components/portfolio.css";

const Portfolio = () => {
  const projets = [
    {
      titre: "Fresh Food",
      description: "Site de vente de produits frais en ligne",
      image: "/img/fresh-food.jpg",
      lien: "#",
      techno: "PHP et MySQL",
    },
    {
      titre: "Restaurant Akira",
      description: "Site vitrine développé avec WordPress",
      image: "/img/restaurant-japonais.jpg",
      lien: "#",
      techno: "WordPress",
    },
    {
      titre: "Espace bien-être",
      description: "Site de bien-être réalisé avec Laravel",
      image: "/img/espace-bien-etre.jpg",
      lien: "#",
      techno: "LARAVEL",
    },
    {
      titre: "SEO",
      description: "Amélioration du référencement naturel",
      image: "/img/seo.jpg",
      lien: "#",
      techno: "SEO",
    },
    {
      titre: "Création d’une API",
      description: "Développement d'une API RESTful avec Symfony",
      image: "/img/coder.jpg",
      lien: "#",
      techno: "PHP-SYMFONY",
    },
    {
      titre: "Maquette d’un site web",
      description: "Prototype réalisé avec Figma",
      image: "/img/screens.jpg",
      lien: "#",
      techno: "FIGMA",
    },
  ];

  return (
    <>
      <section className="text-center">
        <img src="/img/banner.jpg" alt="Services" className="img-fluid" />

        <h1>Portfolio</h1>
        <p>Voici quelques-unes de mes réalisations</p>
      </section>

      <Container className="my-5">
        <Row className="g-4">
          {projets.map((projet, index) => (
            <Col key={index} xs={12} sm={6} md={4} className="mb-4 h-100">
              <Card className="custom-card h-100 d-flex flex-column shadow-sm">
                <Card.Img
                  variant="top"
                  src={projet.image}
                  className="img-fluid"
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{projet.titre}</Card.Title>
                  <Card.Text>{projet.description}</Card.Text>

                  <div className="mt-auto">
                    <div className="text-center">
                      <Button
                        variant="primary"
                        href={projet.lien}
                        className="custom-btn px-3 py-1"
                        style={{ fontSize: "0.9rem" }}
                      >
                        Voir le site
                      </Button>
                    </div>
                    <p
                      className="text-muted mt-2 mb-0 text-center"
                      style={{ fontSize: "0.85rem" }}
                    >
                      Site réalisé avec {projet.techno}
                    </p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <Footer />
    </>
  );
};

export default Portfolio;
